FROM node:16.14

WORKDIR /lms

# Copy package.json and package-lock.json files
COPY package*.json ./

# Copy env variable
COPY .env ./


# Copy tsconfig
COPY jsconfig.json ./

# Set env variable dev mode
RUN npm install;

COPY . ./
# Set the PORT variable to 2800
ENV PORT 3000

# Run and expose the server on port 2800
EXPOSE $PORT

# Run the command to start the app
CMD ["npm", "run", "dev"]