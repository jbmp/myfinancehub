# My Finance Hub | Authentication

## Description

This is the authentication service for the My Finance Hub application. It is a RESTful API that provides authentication and authorization services for the application. It is built using Node.js, Express, and MongoDB.

## Getting Started

### Dependencies

* Node.js
* MongoDB
* Express
* Mongoose
* Dotenv
* Dev Dependencies
  * Nodemon

### Installing & Executing

* Clone the repository
* `docker-compose -f docker-compose.dev.yml build`
* `docker-compose -f docker-compose.dev.yml up`

### Environment Variables

Create a `.env` file (default values shown below, otherwise) in the root directory and add the following environment variables:

* 
* `MONGO_USERNAME` - MongoDB username (default: `dev_user`)
* `MONGO_PASSWORD` - MongoDB password (default: `dev_password`)
* `MONGO_HOSTNAME` - MongoDB hostname (default: `auth-api-mongodb`)
* `MONGO_PORT` - MongoDB port (default: `27017`)
* `MONGO_DB` - MongoDB database name (default: `authApiDb`)

* `AUTH_API_HOST` - Authentication API hostname (default: `0.0.0.0`)
* `AUTH_API_PORT` - Authentication API port (default: `3000`)

## Example Requests

GET http://localhost:3000/users/list

---

POST http://localhost:3000/users
Content-Type: application/json; charset=utf-8

{
  "username": "jdoe123",
  "password": "P@ssw0rd",
  "email": "john.doe@example.com",
  "name": "John Doe"
}

---
