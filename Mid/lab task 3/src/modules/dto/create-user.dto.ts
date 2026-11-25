import { Type } from "class-transformer";
import {
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  fullName!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, {
    message:
      "password must contain uppercase, lowercase, number, and special character",
  })
  password!: string;

  @Type(() => Number)
  @IsInt()
  @Min(18)
  @Max(60)
  age!: number;

  @IsString()
  @Matches(/^01\d{9}$/, {
    message: "phone must be exactly 11 digits and begin with 01",
  })
  phone!: string;

  @IsIn(["student", "teacher"])
  accountType!: "student" | "teacher";

  @IsOptional()
  @IsString()
  @MinLength(10)
  address?: string;
}
