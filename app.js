// For environment Variables
require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose")
const app = express();

//parsers
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const contactrouter = require('./routes/contact');


// Database Connection
mongoose.connect("mongodb://localhost:27017/teaContact", {
  useNewUrlParser: true
})
.then(() => {
  console.log("Database Connected")
});

// Middlewares
app.set("view engine" , 'ejs')
app.set('views', __dirname + '/views');
app.use('/public',express.static(__dirname+'/public'))

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// Routes
// app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',contactrouter);

//PORT
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log('Server is up and running...')
})