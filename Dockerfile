FROM node:18.17.0-alpine as development

# Set NODE_ENV to production by default because switches middlewares
# and dependencies to efficient code path and NPM installs only production dependencies
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

# https://vsupalov.com/docker-arg-env-variable-guide/
ENV PORT=3000

# Install bash for debugging and install project dependencies
RUN apk add --no-cache bash \
    && npm install \
    && npm cache clean --force --loglevel=error

COPY . .

# Expose the port your application uses (if applicable)
EXPOSE $PORT

CMD ["npm", "run", "build"]



FROM node:18.17.0-alpine as production

# Set NODE_ENV to production by default because switches middlewares
# and dependencies to efficient code path and NPM installs only production dependencies
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=development /usr/src/app/build ./build

CMD ["node", "build/index.js"]