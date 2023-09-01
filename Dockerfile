# Based on Alpine Linux, much smaller thant most distribution base images
# to minimize image size with additional packages/tools (such as git or bash)
FROM node:18.17.0-alpine


# Working directory that holds the application code inside the image,
# this is the directory that will be used in the container
WORKDIR /usr/src/app

# Install app dependencies
# The wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install bash for debugging
RUN apk add --no-cache bash

# Install project dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port your application uses (if applicable)
EXPOSE 3000

CMD ["node", "app.js"]