const {MongoClient} = require('mongodb');
const mongoDbUrl = 'mongodb://13.127.33.237:27017'
let myMongoClient

let setMongoClient = (client) => {
    myMongoClient = client
}
let getMongoClient = () => {
    return myMongoClient;
}
async function dbConnect() {
    const mongoClient = new MongoClient(mongoDbUrl)
    let client = await mongoClient.connect();
    return client;
    }

module.exports= {
    dbConnect,
    setMongoClient,
    getMongoClient,
};