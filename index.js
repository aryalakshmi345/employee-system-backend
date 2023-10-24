// import json-server in index.js file
const jsonServer = require('json-server')

// create a server for our application
const empDetailServer = jsonServer.create()

// set up path/route from json file
const router = jsonServer.router('db.json')

// returns middlewarw used by json server
const middleware = jsonServer.defaults()

// set up port for running server
const port = 4000 || process.env.port

// use middlewares and router in server 
empDetailServer.use(middleware)
empDetailServer.use(router)

// to listen server for resolving request from client 
empDetailServer.listen(port,()=>{
    console.log('Your Application is running ');
})