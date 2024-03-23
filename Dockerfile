# Build frontend
FROM node:latest AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# Build backend
FROM node:latest AS backend-build
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend .
RUN npm run build

# Final image
FROM node:latest
WORKDIR /app
COPY --from=frontend-build /app/frontend/build ./frontend
COPY --from=backend-build /app/backend .
CMD ["pm2-runtime", "start", "server.js", "--name", "backend", "--", "npm", "start", "--prefix", "frontend"]
