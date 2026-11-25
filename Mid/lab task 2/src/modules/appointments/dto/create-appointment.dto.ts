import {
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  Min,
} from "class-validator";

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  patientId!: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  doctorId!: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  clinicId!: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  appointmentType!: string;

  @IsNotEmpty()
  @IsDateString()
  appointmentTime!: string;

  @IsNotEmpty()
  @IsIn(["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"])
  status!: string;
}
