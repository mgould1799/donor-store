# donor-store

Donor Store is a full stack application that takes in information about a Donor. That has an HTML frontend that takes in inputs from a donor, sends it to an API, and then stores in a database. The client and server side are supported by NodeJS. The database is MySQL. 

## Installation

Make sure to install NPM

```bash
npm install 
cd donor-store-gui
npm install 
```

## Run 

This can be ran using the docker compose or locally. 


Ideally, this should be ran with docker-compose.


For docker compose, you will need to build the dockerfiles at the root of the repository and the in the donor-store-gui. 

```
docker build ./ -t donor-store 
cd donor-store-gui 
docker build ./ -t donor-store-gui
cd ..
docker-compose up
```

A  `run.sh` file is also provided to run the application with docker-compose 

For local set up, a MYSQL database with enviroment variables will need to be set up. 
Once the MySQL db is up, you can run the API with npm start from the root of the directory. To get the frontend to run, `cd donor-store-gui`, and run `npm start`. 


## Design

### MySQL
For quickness, a single table was created to allow for this application to be created quickly that holds all information about a donor. Ideally, we would like to split the Donor database into at least three tables to allow for seperation of data and normalization. 

The quick schema can be found in `donor.sql`. An example of how the schema might look for normalization is in the file `would-like-to-donor.sql`. 

### API 

The API sits at the route of the project. NodeJS was chose to get things up and running quickly. Simple CRUD operations were created. The `app` folder contains the different structures to support api routes, models, controllers, and more. 


### donor-store-gui (Frontend)

A seperate server was used to host the client application. This way to seperate the client and server. The main HTML page is unfinished at the moment and only does a simple call that prints out to the console the number of donors that exists within the database at the time. 