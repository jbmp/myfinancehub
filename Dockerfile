# Based on Alpine Linux, much smaller thant most distribution base images
# to minimize image size with additional packages/tools (such as git or bash)
FROM node:18.17.0-alpine

# Install bash for debugging
RUN apk add --no-cache bash

# Working directory that holds the application code inside the image,
# this is the directory that will be used in the container
WORKDIR /usr/src/app

# Set NODE_ENV to production by default because switches middlewares
# and dependencies to efficient code path and NPM installs only production dependencies
ARG NODE_ENV=production

# https://vsupalov.com/docker-arg-env-variable-guide/
ENV PORT=3000

# Install app dependencies
# The wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./



# Install project dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port your application uses (if applicable)
EXPOSE $PORT

# Run node as non-root user to avoid attacker to get unlimited power over the container
USER node
CMD ["node", "app.js"]

# TODO: Use multi-stage builds to build the application and then copy the build output into a smaller image