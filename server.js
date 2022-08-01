const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))

//app.use(express.static(__dirname+"test.html"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const addNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 + num2;
    return result;
}

const dividNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 / num2;
    return result;
}

const multNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 * num2;
    return result;
}

/*app.get("/addTwoNumbers",(req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1,number2)
    res.json({statusCode: 200, data: result, message:"Success"})
})*/

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "sample.html"));
  });

app.post("/addTwoNumbers",(req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1,number2)
    res.send({data:result})
})

var port = process.env.port || 4000;

app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
})