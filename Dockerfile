# Use Node.js as the base image
FROM node:latest AS build

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

# Expose ports for both frontend (3000) and backend (5000)
EXPOSE 3000
EXPOSE 5000
RUN npm install pm2 -g
# Start both frontend and backend servers with PM2
CMD ["sh", "-c", "pm2-runtime start backend/server.js --name backend && cd .. && cd frontend && pm2-runtime start npm -- start --name frontend"]

