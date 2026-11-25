import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { CreateDoctorProfileDto } from "./dto/create-doctor-profile.dto";
import { DoctorsService } from "./doctors.service";

@Controller("doctors")
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  create(@Body() createDoctorProfileDto: CreateDoctorProfileDto) {
    return this.doctorsService.create(createDoctorProfileDto);
  }

  @Get()
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.doctorsService.findOne(id);
  }
}
