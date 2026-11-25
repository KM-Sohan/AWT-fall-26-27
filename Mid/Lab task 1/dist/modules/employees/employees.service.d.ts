import { Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { Employee } from "./entities/employee.entity";
type EmployeeResponse = Omit<Employee, "password">;
export declare class EmployeesService {
    private readonly employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeResponse>;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<Employee>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<EmployeeResponse>;
    remove(id: number): Promise<{
        message: string;
    }>;
    private withoutPassword;
}
export {};
