const {MongoClient} = require('mongodb');
// const mongoDbUrl = 'mongodb://skaran:12345678@13.127.33.237:27017/?authSource=admin';
const mongoDbUrl = 'mongodb://localhost:27017'
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