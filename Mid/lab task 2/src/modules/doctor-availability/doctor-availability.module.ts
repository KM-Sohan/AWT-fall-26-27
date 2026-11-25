import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DoctorProfile } from "@/modules/doctors/entities/doctor-profile.entity";
import { DoctorAvailability } from "./entities/doctor-availability.entity";
import { DoctorAvailabilityController } from "./doctor-availability.controller";
import { DoctorAvailabilityService } from "./doctor-availability.service";

@Module({
  imports: [TypeOrmModule.forFeature([DoctorAvailability, DoctorProfile])],
  controllers: [DoctorAvailabilityController],
  providers: [DoctorAvailabilityService],
})
export class DoctorAvailabilityModule {}
