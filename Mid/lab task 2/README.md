# Lab Task 2 - Rural Health Connect Doctor API

## Entities in this task

This API uses three database entities related to the doctor part of Rural Health Connect:

1. `DoctorProfile`: user ID, clinic ID, full name, and specialization.
2. `DoctorAvailability`: doctor, available date, start and end times, and slot status.
3. `Appointment`: patient ID, doctor, clinic ID, appointment type, appointment time, and status.

All three have generated integer primary keys. Availability and appointment rows reference an existing doctor profile. The related user, clinic, and patient records are outside this standalone three-entity lab database.

## Setup

Requirements: Node.js 22+, pnpm 10, and PostgreSQL. Redis and Docker are not required.

1. In pgAdmin, create a PostgreSQL database named `rhc_lab_task2`.
2. Copy `.env.example` to `.env` in this folder, then set `DB_PASSWORD` to your local PostgreSQL password.
3. Install the project dependencies:

   ```powershell
   pnpm.cmd install
   ```

4. Create the three tables by running the TypeORM migration:

   ```powershell
   pnpm.cmd run migration:run
   ```

5. Start the backend:

   ```powershell
   pnpm.cmd run start:dev
   ```

The API runs at `http://localhost:5002`. Keep the terminal open while testing.

## Postman requests

Use `Content-Type: application/json` for POST requests.

### Doctor profiles

`POST http://localhost:5002/doctors`

```json
{
  "userId": 101,
  "clinicId": 1,
  "fullName": "Dr. Ayesha Rahman",
  "specialization": "Cardiology"
}
```

`GET http://localhost:5002/doctors` lists all doctors. `GET http://localhost:5002/doctors/1` gets one doctor by ID.

### Doctor availability

Create a doctor first, then use its returned `id` as `doctorId`.

`POST http://localhost:5002/doctor-availabilities`

```json
{
  "doctorId": 1,
  "availableDate": "2026-12-01",
  "startTime": "09:00:00",
  "endTime": "12:00:00",
  "slotStatus": "AVAILABLE"
}
```

`GET http://localhost:5002/doctor-availabilities` lists all availability records. `GET http://localhost:5002/doctor-availabilities/1` gets one by ID.

### Appointments

Use an existing doctor ID in `doctorId`.

`POST http://localhost:5002/appointments`

```json
{
  "patientId": 201,
  "doctorId": 1,
  "clinicId": 1,
  "appointmentType": "IN_PERSON",
  "appointmentTime": "2026-12-01T10:00:00.000Z",
  "status": "PENDING"
}
```

`GET http://localhost:5002/appointments` lists all appointments. `GET http://localhost:5002/appointments/1` gets one by ID.

### Validation check

Send a doctor POST with an empty required field, for example `"fullName": ""`. The API should return **400 Bad Request**. Required fields in all three create DTOs use `@IsNotEmpty()` plus type and format checks.

## Migration

`src/database/migrations/CreateDoctorTask2Entities1795560000002.ts` creates `doctor_profiles`, `doctor_availabilities`, and `appointments`. It also adds foreign keys from availability and appointment records to `doctor_profiles`. The `down` migration drops those tables in dependency order.

## Files and code layers

Each feature has its own module, controller, service, DTO, and entity. Controllers handle HTTP routes, DTOs validate request data, services use TypeORM repositories for database operations, and the migration creates the PostgreSQL tables.

Do not upload `.env`, `node_modules`, or `dist`. `.env.example` contains safe sample values and can be included.
