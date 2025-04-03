let { MongoClient} = require('mongodb');

let MongoDb_url='mongodb://127.0.0.1:27017';
const client = new MongoClient(MongoDb_url);
let Dbconnection= async()=>{
    await client.connect();
    let db= client.db("Swag")
    return db;


}

module.exports={Dbconnection};