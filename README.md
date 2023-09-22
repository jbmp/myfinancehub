# My Finance Hub | Authentication

## Description

This is the authentication service for the My Finance Hub application. It is a RESTful API that provides authentication and authorization services for the application. It is built using Node.js, Express, and MongoDB.

## Getting Started

### Dependencies

* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Express](https://github.com/expressjs/express#readme)
* [Mongoose](https://github.com/Automattic/mongoose#readme)
* [Dotenv](https://github.com/motdotla/dotenv#readme)
* [Cors](https://github.com/expressjs/cors#readme)

Dev Dependencies

* [Typescript](https://github.com/microsoft/TypeScript/#readme)
* [Rimraf](https://github.com/isaacs/rimraf#readme)
* [ESLint](https://github.com/eslint/eslint#readme) (check  [typescript-eslint rules](https://typescript-eslint.io/rules/))
* [Tsx](https://github.com/esbuild-kit/tsx#readme)
* [Jest](https://github.com/jestjs/jest#readme)
* [Supertest](https://github.com/ladjs/supertest#readme)
* [Fishery](https://github.com/thoughtbot/fishery#readme)
* [Faker](https://github.com/faker-js/faker#readme)

### Installing & Executing

* Clone the repository
* `docker-compose -f docker-compose.dev.yml up` to run in development mode
* `docker-compose -f docker-compose.test.yml up` to run in test mode

Add `--build` if you want/need to rebuild the images.

The `node_modules` folder is not bound between the host and container to maintain isolation. However, if you need to view its contents for the sake of IDE assistance, you can:

* update the `docker-compose.dev.yml` to run `npm install` before the `npm run dev`
* or run the `install_node_with_vm.sh` script and then run `npm install` locally. If you encounter permission-related complaints, you can resolve them by running `chmod +x` on it.

### Environment Variables

Create a `.env` file (default values shown below, otherwise) in the root directory and add the following environment variables:

* `MONGO_USERNAME` - MongoDB username (default: `dev_user`)
* `MONGO_PASSWORD` - MongoDB password (default: `dev_password`)
* `MONGO_HOSTNAME` - MongoDB hostname (default: `auth-api-mongodb`)
* `MONGO_PORT` - MongoDB port (default: `27017`)
* `MONGO_DB` - MongoDB database name (default: `authApiDb`)

* `AUTH_API_HOST` - Authentication API hostname (default: `0.0.0.0`)
* `AUTH_API_PORT` - Authentication API port (default: `3000`)

## Example Requests

GET http://localhost:3000/users

---

POST http://localhost:3000/users
Content-Type: application/json; charset=utf-8

{
  "username": "jdoe123",
  "password": "P@ssw0rd",
  "email": "jorge.bras@example.com",
  "name": "Jorge Bras"
}

---
