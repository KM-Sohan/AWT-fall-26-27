import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DoctorProfile } from "@/modules/doctors/entities/doctor-profile.entity";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { Appointment } from "./entities/appointment.entity";

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    @InjectRepository(DoctorProfile)
    private readonly doctorRepository: Repository<DoctorProfile>,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const { doctorId, appointmentTime, ...appointmentDetails } =
      createAppointmentDto;
    const doctor = await this.doctorRepository.findOneBy({ id: doctorId });
    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${doctorId} was not found`);
    }

    const appointment = this.appointmentRepository.create({
      ...appointmentDetails,
      appointmentTime: new Date(appointmentTime),
      doctor,
    });
    return this.appointmentRepository.save(appointment);
  }

  findAll(): Promise<Appointment[]> {
    return this.appointmentRepository.find({
      relations: { doctor: true },
      order: { id: "ASC" },
    });
  }

  async findOne(id: number): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOne({
      where: { id },
      relations: { doctor: true },
    });
    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} was not found`);
    }
    return appointment;
  }
}
