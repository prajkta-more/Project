# 🍴 Vrindavan Restaurant – Reservation App

This project is a full-stack web application for managing a restaurant website with:

🖥️ Frontend: Angular

⚙️ Backend: Spring Boot

🗄️ Database: PostgreSQL

# 🚀 Features

Responsive Home, Menu, About, Contact pages

Make Reservation form (connected to backend)

Store reservation details in the database

API integration between Angular and Spring Boot

# 🛠️ Tech Stack

Frontend: Angular 16+, HTML5, CSS3, TypeScript

Backend: Spring Boot 3+, Java 17

Database: MySQL (or PostgreSQL)

Build Tools: Maven (Backend), Angular CLI (Frontend)

# ⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/vrindavan-restaurant.git
cd vrindavan-restaurant

2️⃣ Backend (Spring Boot) Setup

Open the backend/ folder in Spring Tool Suite (STS) / IntelliJ / Eclipse

Configure application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/restaurantdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


Run the Spring Boot Application

mvn spring-boot:run


# 👉 Server will start at: http://localhost:8080

3️⃣ Frontend (Angular) Setup

Open the frontend/ folder in VS Code

Install dependencies

npm install


Run Angular App

ng serve


# 👉 Angular will run on: http://localhost:4200

4️⃣ Connect Angular with Spring Boot

In reservation.service.ts update API URL:

private baseUrl = 'http://localhost:8080/api/reservations';


Now form submissions will hit the backend. 🎉

# 📂 Project Structure
vrindavan-restaurant/

│
├── backend/         # Spring Boot Code

│   ├── src/main/java/com/example/restaurant

│   │   ├── controller/ReservationController.java

│   │   ├── model/Reservation.java

│   │   └── repository/ReservationRepository.java

│   └── src/main/resources/application.properties
│
├── frontend/                # Angular Code
│   ├── src/app
│   │   ├── home/home.component.ts
│   │   ├── menu/menu.component.ts
│   │   ├── about/about.component.ts
│   │   ├── contact/contact.component.ts
│   │   ├── reservation/reservation.component.ts
│   │   └── services/reservation.service.ts
│   └── angular.json
│
└── README.md

# 📌 API Endpoints
Method	Endpoint	Description
POST	/api/reservations	Create a new reservation
GET	/api/reservations	Fetch all reservations
# 📸 Screenshots

👉 (Add screenshots of your Home Page, Menu Page, Reservation Form)

# 👨‍💻 Author

Developed with ❤️ by Prajkta More

