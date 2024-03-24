# Use Node.js as the base image
FROM node:alpine AS frontend

# Set working directory
WORKDIR /app/frontend

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy frontend files
COPY . .

# Build frontend
RUN npm run build

# Expose port for frontend service
EXPOSE 3000

# Command to start frontend server
CMD ["npm", "start"]
