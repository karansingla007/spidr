const mongoDbLib= require('../libs/mongodb');
const response = require('../libs/responseLib')
const util = require('../libs/util')

let getAllUser =async (req, res) => {
   try {
    let mongoClient = mongoDbLib.getMongoClient().db('spidr');
    data = await mongoClient.collection('users').find({}).toArray();
    console.log(data);
    response.generate(false, "user list", 200, data, res);
   } catch(err) {
    console.warn(err);
    response.generate(true, "get all user list error", 500, err, res);
   }
}

let createUser =async (req, res) => {
   try {
    let mongoClient = mongoDbLib.getMongoClient().db('spidr');
    console.log(req);
    console.log(req.body);
    data = await mongoClient.collection('users').insertMany(
      [
         {user_name:'karan',password:'bkhwhyy'},
         {user_name:'nagu',password:'8e9yye'},
     ]
    );
    console.log(data);
    response.generate(false, "user created", 200, data,res);
   } catch(err) {
    console.warn(err);
    response.generate(true, "create user error", 500, err, res);
   }
}

let getRandomUserName =async (req, res) => {
   try {
      let userName = util.generateRandomUserName();
      console.log(userName);
      let data = {'user_name': userName};
      response.generate(false, "user created", 200, data, res);
   } catch(err) {
    console.warn(err);
    response.generate(true, "generate user name erro", 500, err, res);
   }
}

module.exports = {
   getAllUser,
   createUser,
   getRandomUserName
}