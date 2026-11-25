import {
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  Min,
} from "class-validator";

export class CreateDoctorAvailabilityDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  doctorId!: number;

  @IsNotEmpty()
  @IsDateString()
  availableDate!: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/)
  startTime!: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/)
  endTime!: string;

  @IsNotEmpty()
  @IsIn(["AVAILABLE", "BOOKED", "UNAVAILABLE"])
  slotStatus!: string;
}
