import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsAndEmployees1795560000000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "varchar", length: "150" },
          { name: "category", type: "varchar", length: "100" },
          { name: "price", type: "double precision" },
          { name: "quantity", type: "integer" },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: "employees",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "varchar", length: "150" },
          { name: "email", type: "varchar", length: "254" },
          { name: "phone", type: "varchar", length: "30" },
          { name: "password", type: "varchar", length: "255" },
          { name: "age", type: "integer" },
          { name: "years_of_working", type: "integer" },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employees");
    await queryRunner.dropTable("products");
  }
}
