import {
  IsEmail,
  IsInt,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

export class CreateEmployeeDto {
  @IsString()
  @MinLength(1)
  @MaxLength(150)
  name!: string;

  @IsEmail()
  @MaxLength(254)
  email!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(30)
  phone!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  password!: string;

  @IsInt()
  @Min(1)
  @Max(120)
  age!: number;

  @IsInt()
  @Min(0)
  @Max(100)
  yearsOfWorking!: number;
}
