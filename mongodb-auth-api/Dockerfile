# Released in 2022 is the most recently stable version of MongoDB
FROM mongo:6.0.9-rc1

# Expose the default MongoDB port
EXPOSE 27017

# Copy your custom MongoDB configuration file
COPY mongod-finance.conf /etc/mongod.conf


CMD ["mongod"]

# Build the finances MongoDB container
# docker build -t mongodb-auth-api ./mongodb-auth-api

# Run the finances MongoDB container
# docker run -d --name mongodb-auth-api -p 27018:27017 mongodb-auth-api