# Krown Dex Backend – Setup & Run Guide

````bash

This guide will help you set up and run the NestJS backend project locally.

## 🚀 Prerequisites
Before starting, ensure the following are installed:
- Node.js v22 or later
- PostgreSQL
- Redis
- npm, yarn, or pnpm (any package manager)
- Docker (optional, for containerized setup)

---

## 📦 Install Dependencies
Use any of the following commands:

```bash
pnpm install
# or
yarn install
# or
npm install


````

# 🔧 Environment Variables

Go to the project root directory
Find the file .env.example
Create a .env file in the same directory
Copy all content from .env.example into .env
Update values based on your local environment
Example:

```bash
cp .env.example .env
```

# 🗄️ Database Setup & Migrations

Create the database

```bash
create db krown_dex_db

```

Run migrations

```bash
pnpm run migration:run
# or
yarn migration:run
# or
npm run migration:run

```

# ⚡ Redis Setup

Option 1: Run Redis with Docker

```bash
docker run -d --name krown-redis -p 6379:6379 redis:7-alpine
```

Option 2: Native install- Start Redis manually, then ensure .env values match:

```bash
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

```

# ▶️ Running the Backend (Development)

Start the NestJS app:

```bash
pnpm start:dev
# or
yarn start:dev
# or
npm run start:dev

```

# 🏗️ Production Build

Create a production build:

```bash
pnpm build
# or
yarn build
# or
npm run build

```

Start the production server:

```bash
pnpm start:prod
# or
yarn start:prod
# or
npm run start:prod

```

# 📁 Project Structure (Overview)

```bash
/project-root
  ├─ src/
  │   ├─ modules/
  │   ├─ common/
  │   ├─ config/
  │   ├─ main.ts
  │   └─ app.module.ts
  ├─ migrations/
  ├─ test/
  ├─ .env.example
  ├─ package.json
  └─ tsconfig.json

```
# Lab Task 3 - Registration Validation API

## Student details
- SL: [add your serial number]
- Name: [add your name]
- ID: [add your student ID]
- Section: [add your section]

## Run
1. Set your local PostgreSQL settings in `.env` (do not commit `.env`).
2. Run `pnpm.cmd install` once.
3. Run `pnpm.cmd run migration:run` if the database migrations have not been run.
4. Run `pnpm.cmd run start:dev`.
5. The current project `.env` uses port 5001. If you change `PORT`, update the Postman collection's `baseUrl` accordingly.

## Endpoint
- `POST /users/register` - validates and returns a safe subset of the submitted user data. The password is never returned.

## Validation rules
- `fullName`: required string, at least 3 characters
- `email`: valid email
- `password`: at least 8 characters with uppercase, lowercase, number, and special character
- `age`: integer from 18 through 60
- `phone`: exactly 11 digits beginning with `01`
- `accountType`: `student` or `teacher`
- `address`: optional string, at least 10 characters when supplied

## Postman
Import `postman/Lab Task 3.postman_collection.json` into Postman and send all five requests. Save readable screenshots in `screenshots/` with these names:
1. `01-valid-registration.png`
2. `02-invalid-email.png`
3. `03-weak-password.png`
4. `04-age-below-18.png`
5. `05-unexpected-isAdmin.png`

Each screenshot must show the method, full URL, response status and response body. Show the JSON body for each request. Never show a real password or database password in screenshots.
