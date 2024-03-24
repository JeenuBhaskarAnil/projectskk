#!/bin/bash
# Start the containers
docker run -d -p 5000:5000 bhaskaranil/backend:latest
docker run -d -p 3000:3000 bhaskaranil/frontend:latest
