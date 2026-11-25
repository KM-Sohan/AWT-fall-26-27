# Lab Task 1: Product and Employee Management API

## Student information

- SL: **[Add your SL number]**
- Name: **[Add your name]**
- Student ID: **[Add your student ID]**
- Section: **[Add your section]**

## What this project does

This NestJS backend stores product and employee records in PostgreSQL. It provides create, list, get-by-ID, update, and delete endpoints for both resources. Database operations are kept in their services, following the course boilerplate's module, controller, service, entity, DTO, and migration structure.

## Requirements

- Node.js 22 or later
- pnpm 10
- PostgreSQL
- Postman

Redis and Docker are not needed for this lab task.

## Install and run

1. Create a PostgreSQL database named `product_management_lab` in pgAdmin, or run this SQL while connected to the default `postgres` database:

   ```sql
   CREATE DATABASE product_management_lab;
   ```

2. In this folder, copy `.env.example` to `.env` and put your PostgreSQL password in `DB_PASSWORD`.

   PowerShell:

   ```powershell
   Copy-Item .env.example .env
   ```

3. Install dependencies:

   ```powershell
   pnpm.cmd install
   ```

4. Create the `products` and `employees` tables by running the migration:

   ```powershell
   pnpm.cmd run migration:run
   ```

5. Start the API in development mode:

   ```powershell
   pnpm.cmd run start:dev
   ```

The API uses `http://localhost:5001`. Leave the terminal running while sending requests from Postman.

## API endpoints

| Method | URL | Purpose |
| --- | --- | --- |
| POST | `/products` | Create a product |
| GET | `/products` | List all products |
| GET | `/products/:id` | Get one product |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |
| POST | `/employees` | Create an employee |
| GET | `/employees` | List all employees |
| GET | `/employees/:id` | Get one employee |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

Example product JSON for `POST /products`:

```json
{
  "name": "Notebook",
  "category": "Stationery",
  "price": 120,
  "quantity": 25
}
```

Example employee JSON for `POST /employees`:

```json
{
  "name": "Alex Rahman",
  "email": "alex@example.com",
  "phone": "01700000000",
  "password": "dummy-password",
  "age": 24,
  "yearsOfWorking": 2
}
```

The employee `password` field is only a dummy field required by the lab specification. This academic example does not implement employee authentication. The API does not return the password in responses.

## Postman evidence to add

Save the required product screenshots in `screenshots/`. Use the filenames below and make sure each screenshot shows the HTTP method, full URL, status, and response. For POST and PATCH, show the JSON request body too. Keep text readable and hide database passwords or other secrets.

1. `01-create.png` — POST request body and saved product response
2. `02-get-all.png` — GET response containing at least two products
3. `03-get-by-id.png` — GET response for an existing product ID
4. `04-update.png` — PATCH request body and successful response
5. `05-confirm-update.png` — GET by ID showing the updated values
6. `06-delete.png` — DELETE request and successful response
7. `07-confirm-delete.png` — GET all showing that the deleted product is absent

Use Postman to create at least two products before taking the `02-get-all.png` screenshot. Keep the application terminal running throughout.

## Submission folder

Place this complete project folder at:

`Main course repository/Mid/Lab task 1/product-management`

Before uploading, fill in the student details above, add the seven Postman screenshots, and commit the project. Do not upload `.env`, `node_modules`, or `dist`.
