#!/bin/bash

# Pull the latest version of the Docker image
docker pull bhaskaranil/frontend:latest
docker pull bhaskaranil/backend:latest

# Start the containers
docker run -d -p 5000:5000 --name backend bhaskaranil/backend
docker run -d -p 3000:3000 --name frontend bhaskaranil/frontend
