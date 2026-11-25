import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DoctorProfile } from "./entities/doctor-profile.entity";
import { DoctorsController } from "./doctors.controller";
import { DoctorsService } from "./doctors.service";

@Module({
  imports: [TypeOrmModule.forFeature([DoctorProfile])],
  controllers: [DoctorsController],
  providers: [DoctorsService],
  exports: [TypeOrmModule],
})
export class DoctorsModule {}
