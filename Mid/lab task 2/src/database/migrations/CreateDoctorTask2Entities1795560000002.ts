import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateDoctorTask2Entities1795560000002
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "doctor_profiles",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "user_id", type: "integer" },
          { name: "clinic_id", type: "integer" },
          { name: "full_name", type: "varchar", length: "150" },
          { name: "specialization", type: "varchar", length: "100" },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: "doctor_availabilities",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "doctor_id", type: "integer" },
          { name: "available_date", type: "date" },
          { name: "start_time", type: "time" },
          { name: "end_time", type: "time" },
          { name: "slot_status", type: "varchar", length: "30" },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      "doctor_availabilities",
      new TableForeignKey({
        columnNames: ["doctor_id"],
        referencedTableName: "doctor_profiles",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: "appointments",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "patient_id", type: "integer" },
          { name: "doctor_id", type: "integer" },
          { name: "clinic_id", type: "integer" },
          { name: "appointment_type", type: "varchar", length: "50" },
          { name: "appointment_time", type: "timestamptz" },
          { name: "status", type: "varchar", length: "30" },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      "appointments",
      new TableForeignKey({
        columnNames: ["doctor_id"],
        referencedTableName: "doctor_profiles",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("appointments");
    await queryRunner.dropTable("doctor_availabilities");
    await queryRunner.dropTable("doctor_profiles");
  }
}
