import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { Employee } from "./entities/employee.entity";

type EmployeeResponse = Omit<Employee, "password">;

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeResponse> {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.withoutPassword(await this.employeeRepository.save(employee));
  }

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find({ order: { id: "ASC" } });
  }

  async findOne(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} was not found`);
    }
    return employee;
  }

  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<EmployeeResponse> {
    const employee = await this.employeeRepository.preload({
      id,
      ...updateEmployeeDto,
    });
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} was not found`);
    }
    return this.withoutPassword(await this.employeeRepository.save(employee));
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.employeeRepository.delete(id);
    if (!result.affected) {
      throw new NotFoundException(`Employee with ID ${id} was not found`);
    }
    return { message: `Employee with ID ${id} was deleted successfully` };
  }

  private withoutPassword(employee: Employee): EmployeeResponse {
    const { password: _password, ...employeeDetails } = employee;
    return employeeDetails;
  }
}
