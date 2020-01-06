const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const http = require('http');
var mongojs = require('mongojs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/collections";
const app = express()
const port = 3000
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var db = require('./database').url;

app.post('/pavan', (req, res) => {
    console.log(req.body);
    db.loginData.insert({
        "Name": req.body.Name, "Email": req.body.Email,
        "Password": req.body.Password, "Phone number": req.body.Pnumber,
    }, function (err, doc) {
        res.json(doc);
    })

})


app.get("/login:pavan", function (req, res) {
    console.log(req.params.pavan.split(',')[0])
    db.loginData.find({ "Email": req.params.pavan.split(',')[0], "Password": req.params.pavan.split(',')[1] }, function (err, doc) {
        if (err) throw err;
        res.json(doc)
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))