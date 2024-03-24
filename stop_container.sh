#!/bin/bash

# Stop and remove the containers
docker stop backend
docker stop frontend
docker rm -f backend
docker rm -f frontend
