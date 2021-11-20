const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/www'));
app.get('/*', (req,res) => {res.sendFile(path.join(__dirname))});

const server = http.createServer(app);
app.listen(PORT,()=>{console.log('listening....')});

// const path = require("path");
// const http = require("http");

// const app = require("express")();

// const bodyParser = require("body-parser");
// const PORT = process.env.PORT || 3000;

// //^For extracting form data in to req.body
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

// //! For fetching files from frontend
// app.use(require('express').static('ngLearner'));
// app.use('/dist/ngLearner',require('express').static(path.join(__dirname+'/dist/ngLearner')))

// app.get('/*', (req,res)=> res.sendFile(path.join(__dirname+'/dist/ngLearner')))

// app.listen(PORT,() =>{
//     console.log(`Server running on ${PORT}`)
// })