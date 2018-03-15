# Application for REST requests training #

## How to setup working environment ##
* Download and install the latest [Node.js](https://nodejs.org/en/download/).
* Download and install the latest [MongoDB](https://www.mongodb.com/download-center#community).
* Clone or download this application to your local machine.
* Install dependencies with:

```
npm install
```
* Run local MongoDB server with:
```
mongod
```
* You can look through database collections with MongoDB shell:
```
mongo
```
* Also you can use GUI for MongoDB such as [MongoDB Compass](https://www.mongodb.com/download-center?filter=community#compass) or [Robomongo Robo 3T](https://robomongo.org/download).



## How to run app ##
* Make sure your MongoDB server running on port 27017 (see above).
* Run application with:
```
npm start
```
* Node.js server will be running on localhost port 8000
* Navigate to `http://localhost:8000/contact` in your browser.


## How to send REST requests to api ##
* There are two endpoints available for sending requests
`/contact` (GET, POST) and `/contact/:contactId` (GET, PUT, DELETE), `:contactId` here is `_id` field from JSON.
* The POST request should contain JSON data with mandatory fields: `firstName, lastName, email` also you can add `company` and `phone`.
* You can use [Postman](https://www.getpostman.com/apps).