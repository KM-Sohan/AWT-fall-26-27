import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DoctorProfile } from "@/modules/doctors/entities/doctor-profile.entity";

@Entity({ name: "doctor_availabilities" })
export class DoctorAvailability {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => DoctorProfile, (doctor) => doctor.availabilities, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "doctor_id" })
  doctor!: DoctorProfile;

  @Column({ type: "date" })
  availableDate!: string;

  @Column({ type: "time" })
  startTime!: string;

  @Column({ type: "time" })
  endTime!: string;

  @Column({ type: "varchar", length: 30 })
  slotStatus!: string;
}
