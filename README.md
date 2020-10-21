# Message Queue using Bull, Redis, and MongoDB in Nodejs
This repo contains the source code for this tutorial [Message Queue using Bull](https://medium.com/better-programming/message-queue-using-bull-redis-and-mongodb-in-node-js-d7dedaa426ea).


## Getting started

### Prerequisites
1- be sure you are installed [Docker](https://docs.docker.com/compose/install/)

### Installation
inside the project open up a terminal and run these commands one by one:

1- run `yarn` to install the npm dependencies.

2- run `cp .env.example .env` to create a .env file of environment variables we need.

3- run `yarn docker:dev` to install and run MongoDB and Redis containers.

4- run `yarn fixture` to install some demo URL into the DB.

5- run `yarn start` to start the webserver.



## start working
open `http://localhost:3000/api-1` or `http://localhost:3000/api-2` url in your favorite browser and checking you're DB, you can see every time you open those URLs, the total count of those URLs will be updated.

### demo
![demo](https://imgur.com/nKW8hy0.gif)