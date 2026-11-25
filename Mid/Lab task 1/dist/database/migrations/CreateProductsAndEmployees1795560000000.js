"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductsAndEmployees1795560000000 = void 0;
const typeorm_1 = require("typeorm");
class CreateProductsAndEmployees1795560000000 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("employees");
        await queryRunner.dropTable("products");
    }
}
exports.CreateProductsAndEmployees1795560000000 = CreateProductsAndEmployees1795560000000;
//# sourceMappingURL=CreateProductsAndEmployees1795560000000.js.map