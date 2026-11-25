import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateDoctorProfileDto } from "./dto/create-doctor-profile.dto";
import { DoctorProfile } from "./entities/doctor-profile.entity";

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(DoctorProfile)
    private readonly doctorRepository: Repository<DoctorProfile>,
  ) {}

  create(createDoctorProfileDto: CreateDoctorProfileDto): Promise<DoctorProfile> {
    const doctor = this.doctorRepository.create(createDoctorProfileDto);
    return this.doctorRepository.save(doctor);
  }

  findAll(): Promise<DoctorProfile[]> {
    return this.doctorRepository.find({ order: { id: "ASC" } });
  }

  async findOne(id: number): Promise<DoctorProfile> {
    const doctor = await this.doctorRepository.findOneBy({ id });
    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${id} was not found`);
    }
    return doctor;
  }
}
