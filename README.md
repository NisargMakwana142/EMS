# Employee Management System (EMS)

A full-stack Employee Management System with a Spring Boot REST API backend and a React (Vite) frontend. It supports creating, viewing, updating, and deleting employee records, backed by MySQL.

## Tech Stack

**Backend**
- Java 21
- Spring Boot 4.1.0
- Spring Data JPA / Hibernate
- MySQL
- Lombok
- Maven

**Frontend**
- React 19
- Vite
- React Router DOM
- Axios
- Bootstrap 5

## Project Structure

```
emsBackend/
├── emsBackend/                # Spring Boot backend
│   ├── src/main/java/com/nisarg/emsBackend/
│   │   ├── controller/        # REST controllers
│   │   ├── dto/                # Data transfer objects
│   │   ├── entity/              # JPA entities
│   │   ├── exception/           # Custom exceptions
│   │   ├── mapper/              # Entity <-> DTO mappers
│   │   ├── repository/          # Spring Data JPA repositories
│   │   ├── service/              # Service interfaces
│   │   └── service/implementation/ # Service implementations
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
└── emsFrontend/
    └── emsfrontend/            # React + Vite frontend
        ├── src/
        │   ├── components/     # UI components (Add/List Employee, Header, Footer)
        │   ├── services/       # Axios API service layer
        │   └── App.jsx
        └── package.json
```

## Prerequisites

- Java 21 (JDK)
- Maven (or use the included `mvnw` wrapper)
- Node.js and npm
- MySQL Server running locally

## Backend Setup

1. Create a MySQL database named `emsdb`.

2. Update the datasource settings in `emsBackend/src/main/resources/application.properties` if needed (defaults shown below):

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3307/emsdb
   spring.datasource.username=root
   spring.datasource.password=
   ```

   Note the default port is `3307` - adjust this to match your local MySQL instance (commonly `3306`).

3. From the `emsBackend/emsBackend` directory, run the application:

   ```bash
   ./mvnw spring-boot:run
   ```

   The API will start on `http://localhost:8080`. Database tables are created/updated automatically via `spring.jpa.hibernate.ddl-auto=update`.

## Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd emsFrontend/emsfrontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL (typically `http://localhost:5173`) in your browser.

## API Endpoints

Base URL: `/api/employees`

| Method | Endpoint              | Description              |
|--------|------------------------|---------------------------|
| POST   | `/api/employees`       | Create a new employee     |
| GET    | `/api/employees`       | Get all employees         |
| GET    | `/api/employees/{id}`  | Get an employee by ID     |
| PUT    | `/api/employees/{id}`  | Update an employee by ID  |
| DELETE | `/api/employees/{id}`  | Delete an employee by ID  |

### Employee Object

```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

## Notes

- CORS is enabled for all origins (`@CrossOrigin("*")`) on the controller for local development convenience.
- Not-found lookups return a `404` via a custom `ResourceNotFoundException`.
- The frontend expects the backend to be reachable (update the base URL in `src/services/EmployeeService.js` if the backend runs on a different host/port).

## Linkedin Post / Project Video
https://www.linkedin.com/feed/update/urn:li:activity:7485289340089217025/
