# Notes API

A secure backend API for managing notes using Node.js, Express, MongoDB, and JWT authentication.

---

## Features

- User Registration & Login
- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Notes CRUD (Create, Read, Update, Delete)
- User-specific notes

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcrypt

---

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Notes (Protected)
- POST /api/notes
- GET /api/notes
- PUT /api/notes/:id
- DELETE /api/notes/:id

---

## How to Run

```bash
npm install
npm start
