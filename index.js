const express = require('express');
const app = express();
const fs = require('fs')
const mongoDbLib= require('./app/libs/mongodb');
const bodyParser = require('body-parser')


app.use(bodyParser.json());

const routesPath = './app/routes'

fs.readdirSync(routesPath).forEach(function (file) {
  if (~file.indexOf('.js')) {
    let route = require(routesPath + '/' + file)
    route.setRouter(app)
  }
})

mongoDbLib.dbConnect().then((client) => {
  mongoDbLib.setMongoClient(client);
})

app.listen(3000, '13.127.33.237');