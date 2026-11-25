import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { AppController } from "@/src/app.controller";
import { AppService } from "@/src/app.service";
import global_config from "@/config/global_config";
import { DoctorsModule } from "@/modules/doctors/doctors.module";
import { DoctorAvailabilityModule } from "@/modules/doctor-availability/doctor-availability.module";
import { AppointmentsModule } from "@/modules/appointments/appointments.module";

@Module({
  imports: [
    PostgresDatabaseProviderModule,
    DoctorsModule,
    DoctorAvailabilityModule,
    AppointmentsModule,

    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
