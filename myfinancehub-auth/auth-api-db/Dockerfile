# Released in 2022 is the most recently stable version of MongoDB
FROM mongo:6.0.9-rc1

# https://vsupalov.com/docker-arg-env-variable-guide/
ENV MONGO_PORT=27017

# Expose the default MongoDB port
EXPOSE $MONGO_PORT

# Copy your custom MongoDB configuration file
COPY mongod-finance.conf /etc/mongod.conf


CMD ["mongod"]
