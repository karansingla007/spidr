const {MongoClient} = require('mongodb');
const mongoDbUrl = 'mongodb://localhost:27017'
const mongoClient = new MongoClient(mongoDbUrl)

async function dbConnect() {
    let result = await mongoClient.connect();
    let db = result.db('spidr');
    // let collection = db.collection('users');
    // let response = await collection.find({}).toArray();
    // console.log(response);
    return db.collection('users');
    }

module.exports= dbConnect;