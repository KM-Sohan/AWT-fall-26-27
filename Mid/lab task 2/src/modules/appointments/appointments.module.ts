import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DoctorProfile } from "@/modules/doctors/entities/doctor-profile.entity";
import { Appointment } from "./entities/appointment.entity";
import { AppointmentsController } from "./appointments.controller";
import { AppointmentsService } from "./appointments.service";

@Module({
  imports: [TypeOrmModule.forFeature([Appointment, DoctorProfile])],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
