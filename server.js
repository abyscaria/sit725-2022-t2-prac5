var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let projectCollection;

const MdbClient = require('mongodb').MongoClient

const uri='mongodb+srv://<user>:<password>@cluster0.y9pjz5o.mongodb.net/?retryWrites=true&w=majority'

const client = new MdbClient(uri, {useNewUrlParser: true});

//create collection....
const createColllection = (collectionName) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}

//insert project......
const insertProjects = (project, callback) => {
    projectCollection.insert(project,callback);
}

//get project....
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

app.get('/api/projects',(req,res) => {
  const cardList = [
  {
      title: "Laborgini-Murci-Stick",
      image: "images/Exotic-Cars-2.jpg",
      link: "About Exotic-Cars 2",
      desciption: "This is an exotic Lanborgini : Laborgini-Murci-Stick"
  },
  {
      title: "ACID-GREEN-918-SPYDER-12",
      image: "images/Exotic-Cars-3.jpg",
      link: "About Exotic-Cars 3",
      desciption: "This an Exotic Spyder -  ACID-GREEN-918-SPYDER-12"
  },
  {
      title: "ACID-GREEN-918-SPYDER-12",
      image: "images/Exotic-Cars-4.jpg",
      link: "About Exotic-Cars 4",
      desciption: "This an Exotic Spyder -  ACID-GREEN-918-SPYDER-12"
  }
]
  res.json({statusCode: 200, data: cardList, message:"Success"})
})

// get api...!!
app.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

// post api....
app.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
})


var port = process.env.port || 5000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
    createColllection('exoticCars')
})
