import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DoctorAvailability } from "@/modules/doctor-availability/entities/doctor-availability.entity";
import { Appointment } from "@/modules/appointments/entities/appointment.entity";

@Entity({ name: "doctor_profiles" })
export class DoctorProfile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "integer" })
  userId!: number;

  @Column({ type: "integer" })
  clinicId!: number;

  @Column({ type: "varchar", length: 150 })
  fullName!: string;

  @Column({ type: "varchar", length: 100 })
  specialization!: string;

  @OneToMany(() => DoctorAvailability, (availability) => availability.doctor)
  availabilities!: DoctorAvailability[];

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments!: Appointment[];
}
