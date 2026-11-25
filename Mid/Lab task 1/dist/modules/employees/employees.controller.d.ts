import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { EmployeesService } from "./employees.service";
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        name: string;
        id: number;
        email: string;
        phone: string;
        age: number;
        yearsOfWorking: number;
    }>;
    findAll(): Promise<import("./entities/employee.entity").Employee[]>;
    findOne(id: number): Promise<import("./entities/employee.entity").Employee>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        name: string;
        id: number;
        email: string;
        phone: string;
        age: number;
        yearsOfWorking: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
