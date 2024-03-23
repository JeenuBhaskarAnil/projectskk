# Use Node.js as the base image
FROM node:alpine AS build

# Set working directory for backend
WORKDIR /app/backend

# Copy backend package.json and package-lock.json files
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install --silent

# Copy backend files
COPY backend .

# Set working directory for frontend
WORKDIR /app/frontend

# Copy frontend package.json and package-lock.json files
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install --silent

# Copy frontend files
COPY frontend .

# Go back to the root directory
WORKDIR /app

# Build the frontend
RUN cd frontend && npm run build

# Expose port for frontend (3000)
EXPOSE 3000

# Command to start the frontend server
CMD ["npm", "start", "--prefix", "/app/frontend/"]
