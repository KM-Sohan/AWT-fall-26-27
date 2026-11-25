import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from "class-validator";

export class CreateDoctorProfileDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  userId!: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  clinicId!: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  fullName!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  specialization!: string;
}
