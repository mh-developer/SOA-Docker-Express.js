# Service Oriented Architecture with Docker and Express.js

## Main idea

We wanted to create demo API with Express.js and then pack this into Docker image and publish to server.

## Technology used

- Express.js with Node
- Docker and Docker Hub
- Portainer

## Installation and running

For running Express.js we first need to install Node.js. Then we can start app with following commands:

- `npm install`
- `npm start`

For creating Docker image and run Docker container we need to run following commands:

- `docker build -t mh7860/vaja5docker:1.0 .`
- `docker run -p 3000:3000  mh7860/vaja5docker:1.0`


We have publish Docker container on Docker Hub:

- https://hub.docker.com/r/mh7860/vaja5docker

