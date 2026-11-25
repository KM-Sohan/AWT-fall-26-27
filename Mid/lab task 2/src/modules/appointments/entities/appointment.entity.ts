import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DoctorProfile } from "@/modules/doctors/entities/doctor-profile.entity";

@Entity({ name: "appointments" })
export class Appointment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "integer" })
  patientId!: number;

  @ManyToOne(() => DoctorProfile, (doctor) => doctor.appointments, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "doctor_id" })
  doctor!: DoctorProfile;

  @Column({ type: "integer" })
  clinicId!: number;

  @Column({ type: "varchar", length: 50 })
  appointmentType!: string;

  @Column({ type: "timestamptz" })
  appointmentTime!: Date;

  @Column({ type: "varchar", length: 30 })
  status!: string;
}
