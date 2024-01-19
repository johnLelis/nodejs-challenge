# Node.js Challenge

## Overview

This repository contains the Node.js Challenge project, a backend application built with Node.js, Express, and Sequelize. It includes features for database migrations, seeding, testing, and coverage reporting.

## Getting Started

To get started with the Node.js Challenge, follow these steps:

1. **Clone the repository to your local machine:**

   ```bash
   https://github.com/johnLelis/nodejs-challenge
   ```

2. **Navigate to the project directory:**

   ```bash
   cd nodejs-challenge
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up your environment variables:**

   Create a `.env` file in the root of the project and define the following variables:

   ```env
   PORT
   POSTGRES_USERNAME
   POSTGRES_PASSWORD
   POSTGRES_DB
   POSTGRES_PORT
   ```

   Note: You can use the .env.example which I included here.

5. **Run migrations:**

   ```bash
   npm run migrate
   ```

6. **Seed the database:**

   ```bash
   npm run seeder
   ```

7. **Start the development server:**

   ```bash
   npm run dev
   ```

8. **View Swagger Documentation:**

   Open your browser and go to [http://localhost:3000/](http://localhost:3000/) to view Swagger documentation.

9. **View Unit Test Coverage:**

   - Run the following command to generate a coverage report:

     ```bash
     npm run test:coverage
     ```

   - Open the generated HTML coverage report by navigating to `./coverage/index.html` using a live server.

     ```bash
     npx live-server ./coverage
     ```

This will start a live server and automatically open the coverage report in your default web browser.

## Using Docker

If you choose to run the Node.js Challenge application and Postgres Database using Docker, ensure you have the following prerequisites installed on your machine:

- **Docker:** The Docker platform allows you to package and distribute applications in containers. You can download and install Docker from the [official Docker website](https://www.docker.com/get-started).

- **Docker Compose:** Docker Compose is a tool for defining and running multi-container Docker applications. It is often used to manage the services required for a complete application stack. Docker Compose is usually included with the Docker installation. Ensure it is available in your system by running:

  ```bash
  docker-compose --version
  ```

If you prefer using Docker, follow these steps instead:

1. **Build the Docker images:**

   ```bash
   docker-compose build
   ```

2. **Run the Docker container:**

   ```bash
   docker-compose up -d
   ```

This will start the Node.js Challenge application and Postgres Database in a Docker container.

## Scripts

- **dev**: Start the development server using `nodemon` for automatic server restarts on file changes.
- **migrate**: Run Sequelize database migrations using the specified migrations path.
- **undo-migrate**: Undo the last Sequelize migration.
- **seeder**: Seed the database with predefined data using the specified seeders path.
- **undo-seeder**: Undo the last database seed operation.
- **test**: Run Mocha tests using the configuration provided in `mocha.config.js`.
- **test:coverage**: Run Mocha tests with coverage reporting using `nyc`.
- **coverage:report**: Generate and open an HTML coverage report using `nyc`.

## Swagger Documentation

- Access the Swagger documentation by visiting [http://localhost:3000](http://localhost:3000/) after starting the server.

## Dependencies

- **dotenv**: Load environment variables from a `.env` file.
- **express**: Web framework for Node.js.
- **pg**: PostgreSQL database driver.
- **sequelize**: ORM for Node.js, supporting PostgreSQL.
- **swagger-ui-express**: Middleware for serving Swagger UI.
- **yamljs**: Convert YAML to JSON.
- **zod**: Data validation library.

## Dev Dependencies

- **chai**: Assertion library for testing.
- **mocha**: Testing framework.
- **nodemon**: Monitor for changes and automatically restart the server.
- **nyc**: Istanbul-based code coverage.
- **sinon**: Test spies, stubs, and mocks.
- **supertest**: HTTP assertion library for testing.
