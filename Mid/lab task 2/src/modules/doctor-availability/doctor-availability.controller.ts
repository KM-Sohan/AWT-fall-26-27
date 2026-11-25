import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { CreateDoctorAvailabilityDto } from "./dto/create-doctor-availability.dto";
import { DoctorAvailabilityService } from "./doctor-availability.service";

@Controller("doctor-availabilities")
export class DoctorAvailabilityController {
  constructor(
    private readonly availabilityService: DoctorAvailabilityService,
  ) {}

  @Post()
  create(@Body() createAvailabilityDto: CreateDoctorAvailabilityDto) {
    return this.availabilityService.create(createAvailabilityDto);
  }

  @Get()
  findAll() {
    return this.availabilityService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.availabilityService.findOne(id);
  }
}
