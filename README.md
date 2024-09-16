# Auth System

This is a full-stack authentication system built with the following technologies:

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion (for animations), Zustand (for state management)
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Token (JWT)

## Features

- User Registration: Users can create an account by providing their email and password.
- Email Verification: After registration, a verification code is sent to the user's email.
- Login: Users can log in using their email and password.
- JWT Authentication: After successful login, the user receives a JWT token.
- Password Reset: Users can request to reset their password. A reset link is sent via email.
- User Authorization: Routes are protected by JWT authentication middleware.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or above)
- MongoDB (Local instance or MongoDB Atlas)
- NPM or Yarn
- Vite (for the frontend build)

## Installation

Follow these steps to set up the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/KartikLakhotiya/Auth-System.git
cd auth-system
```

### 2. Backend Setup

Go into the backend directory and install the dependencies.

```bash
cd backend
npm install
```

### 3. Setting up Environment Variables

Create a .env file in the root directory of backend folder and add the following variables.

```bash
PORT = 5000
MONGO_URI = "your_mongo_db_url" 
JWT_SECRET = "your_jwt_secret" 
NODE_ENV = development
MAILTRAP_TOKEN = "your_mailtrap_token"
MAILTRAP_ENDPOINT = https://send.api.mailtrap.io/api/send
CLIENT_URL = http://localhost:5173
```

### 4. Frontend Setup

Go into the frontend directory and install the dependencies.
```bash
cd frontend
npm install
```

### 5. Run the application

To run the backend server go into the backend directory and run the following command
```bash
npm run dev
```

To run the frontend server go into the frontend directory and run the following command
```bash
npm run dev
```

The backend server will run at ```http://localhost:5000``` and the frontend server will run at ```http://localhost:5173```.

## Online Deployment

Deploying this project doesn't makes sense as Mailtrap only allows to send mails to the account through I've signed up for. Demo domains can only be used to send emails to account owners. It only allows to send mail to other email IDs if you have a domain registered with Mailtrap. So, other users cannot use the features of this project because of the restriction of Mailtrap. If you have a domain then you should definitely deploy this project.
Since, I do not have a domain I will not deploy this project on Vercel or any other platform.

## Contributing

Feel free to open issues and submit pull requests. Any contributions are appreciated!

#### If you liked my project please leave a star. Thank You.