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
      var body = req.body;
      userData = await mongoClient.collection('users').find({'user_name':body.user_name}).toArray();
      if(Object.entries(userData).length === 0) {
         /// For new user
         await mongoClient.collection('users').insertMany(
            [
               {user_name:body.user_name,password:body.password, user_id: util.generateUserId()},
         ]
         );
         let data = {
            is_new: true,
         }
         response.generate(false, "user created", 200, data,res);
      } else {
         /// For Old user
         let data = {
            is_new: false,
            user_detail: userData,
         }
         response.generate(false, "old user", 200, data,res);
      }
   
   } catch(err) {
    console.warn(err);
    response.generate(true, "create user error", 500, err, res);
   }
}

let getRandomUserName =async (req, res) => {
   try {
      let userName = util.generateRandomUserName();
      let data = {'user_name': userName};
      response.generate(false, "user created", 200, data, res);
   } catch(err) {
    console.warn(err);
    response.generate(true, "generate user name error", 500, err, res);
   }
}

let updateUserInfo =async (req, res) => {
   try {
      var body = req.body;
      console.log(body.user_name);
      let mongoClient = mongoDbLib.getMongoClient().db('spidr');
      var data = await mongoClient.collection('users').updateOne({user_id: body.user_id},
         {$set: {sex:body.sex,age:body.age}},
       );
      response.generate(false, "user updated", 200, data,res);
   } catch(err) {
    console.warn(err);
    response.generate(true, "update user info error", 500, err, res);
   }
}

let getUserDetailByUserId =async (req, res) => {
   try {
      var params = req.params;
      let mongoClient = mongoDbLib.getMongoClient().db('spidr');
      var userData = await mongoClient.collection('users').find({'user_id':params.user_id}).toArray();
      response.generate(false, "user detail", 200, userData,res);
   } catch(err) {
    console.warn(err);
    response.generate(true, "fetch user detail error", 500, err, res);
   }
}

module.exports = {
   getAllUser,
   createUser,
   getRandomUserName,
   updateUserInfo,
   getUserDetailByUserId
}