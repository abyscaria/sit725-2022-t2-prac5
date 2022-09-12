require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

const uri =  "mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+@cluster0.y9pjz5o.mongodb.net/?retrywrites=true&w=majority' // replace it with the url you get from mongo atlas
const client = new MongoClient(uri,{ useNewUrlParser: true })

client.connect((err,db) => {
     if(!err){
       console.log('Database Connected')
     }else{
       console.log('[error]',err)
     }
 });
 

exports.mongoClient = client;