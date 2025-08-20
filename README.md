# 🍴 Vrindavan Restaurant – Reservation App

This project is a full-stack web application for managing a restaurant website with:

🖥️ Frontend: Angular

⚙️ Backend: Spring Boot

🗄️ Database: PostgreSQL

# 🚀 Features

Responsive Home, Menu, About, Contact pages

Make Reservation form (connected to backend)

API integration between Angular and Spring Boot

# 🛠️ Tech Stack

Frontend: Angular 19, HTML5, CSS, TypeScript

Backend: Spring Boot, Java 17

Database: PostgreSQL

Build Tools: Maven (Backend), Angular CLI (Frontend)

# 2️⃣ Backend (Spring Boot) Setup

Open the backend/ folder in Spring Tool Suite (STS) / IntelliJ / Eclipse

Configure application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/vrindavan_restaurant

spring.datasource.username=postgres

spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update

spring.jpa.show-sql=true


Run the Spring Boot Application

mvn spring-boot:run


 👉 Server will start at: http://localhost:8080

# 3️⃣ Frontend (Angular) Setup

Open the frontend/ folder in VS Code

Install dependencies

npm install


Run Angular App

ng serve


 👉 Angular will run on: http://localhost:4200

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
├── frontend/    

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

# Contact:
For any questions or feedback, feel free to reach out:

Your Name : Prajkta More , Pornima Kavade

Email: prajktamore63@gmail.com

GitHub link : https://github.com/prajkta-more/Project.git

# 📸 Screenshots

<img width="1919" height="1011" alt="Screenshot 2025-08-20 155739" src="https://github.com/user-attachments/assets/d6a05f89-a284-4d4e-aff6-facebff7bdaa" />
<img width="1909" height="1026" alt="Screenshot 2025-08-20 155846" src="https://github.com/user-attachments/assets/22194a3e-5eeb-47d7-a9d9-d40c849cb71b" />
<img width="1915" height="1015" alt="Screenshot 2025-08-20 155927" src="https://github.com/user-attachments/assets/d9ee1d55-381c-49c3-b15b-387f904c678c" />
<img width="1910" height="1006" alt="Screenshot 2025-08-20 160119" src="https://github.com/user-attachments/assets/27dacb99-67e6-40de-8180-cfb53c283e60" />
<img width="1919" height="1004" alt="Screenshot 2025-08-20 160207" src="https://github.com/user-attachments/assets/113b2f50-cafa-4410-abc1-0b70b967d73c" />



