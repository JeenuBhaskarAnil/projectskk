# Use Node.js as the base image
FROM node:latest AS build

# Set working directory for backend
WORKDIR /app/backend

# Copy package.json and package-lock.json files for backend
COPY backend/package*.json ./
# Install backend dependencies
RUN npm install --silent

# Set working directory for frontend
WORKDIR /app/frontend

# Copy package.json and package-lock.json files for frontend
COPY frontend/package*.json ./
# Install frontend dependencies
RUN npm install --silent

# Go back to the root directory
WORKDIR /app

# Copy the entire application
COPY . .

# Build the frontend
RUN cd frontend && npm run build

# Expose port for backend (assuming backend runs on port 3000)
EXPOSE 3000
RUN npm install pm2 -g
# Start backend and frontend servers with PM2
CMD ["pm2-runtime", "start", "backend/server.js", "--name", "backend", "--", "frontend"]
