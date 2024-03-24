# Use Node.js as the base image
FROM node:alpine AS backend

# Set working directory
WORKDIR /app/backend

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy backend files
COPY . .

# Expose port for backend service
EXPOSE 5000

# Command to start backend server
CMD ["npm", "start"]
