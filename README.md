# donor-store

Donor Store is a full stack application. That has an HTML frontend that takes in inputs from a donor, sends it to an API, and then stores in a database. The client and server side are supported by NodeJS. The database is MySQL. 

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


## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```
