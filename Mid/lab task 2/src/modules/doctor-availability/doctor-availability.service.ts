import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DoctorProfile } from "@/modules/doctors/entities/doctor-profile.entity";
import { CreateDoctorAvailabilityDto } from "./dto/create-doctor-availability.dto";
import { DoctorAvailability } from "./entities/doctor-availability.entity";

@Injectable()
export class DoctorAvailabilityService {
  constructor(
    @InjectRepository(DoctorAvailability)
    private readonly availabilityRepository: Repository<DoctorAvailability>,
    @InjectRepository(DoctorProfile)
    private readonly doctorRepository: Repository<DoctorProfile>,
  ) {}

  async create(
    createAvailabilityDto: CreateDoctorAvailabilityDto,
  ): Promise<DoctorAvailability> {
    const { doctorId, ...availabilityDetails } = createAvailabilityDto;
    const doctor = await this.doctorRepository.findOneBy({ id: doctorId });
    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${doctorId} was not found`);
    }

    const availability = this.availabilityRepository.create({
      ...availabilityDetails,
      doctor,
    });
    return this.availabilityRepository.save(availability);
  }

  findAll(): Promise<DoctorAvailability[]> {
    return this.availabilityRepository.find({
      relations: { doctor: true },
      order: { id: "ASC" },
    });
  }

  async findOne(id: number): Promise<DoctorAvailability> {
    const availability = await this.availabilityRepository.findOne({
      where: { id },
      relations: { doctor: true },
    });
    if (!availability) {
      throw new NotFoundException(
        `Doctor availability with ID ${id} was not found`,
      );
    }
    return availability;
  }
}
