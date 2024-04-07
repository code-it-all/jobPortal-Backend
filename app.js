const express = require('express')
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
var cors = require('cors');
const errorHandler = require('./middleware/error')
dotenv.config();
const cookieParser = require('cookie-parser')

const authRoutes = require('./routes/authRoutes')


// console.log(process.env.DATABASE)
// //database connection 
mongoose.connect(process.env.DATABASE).then(()=> console.log("Db connected"))
.catch((err)=>console.log(err));


app.use(morgan('dev'))
app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}))
app.use(cookieParser());
app.use(cors());


app.use('/', authRoutes)


//middleware for error handling
app.use(errorHandler)


let port = process.env.PORT || 8000;
app.listen(port, ()=> console.log('Server running at port 8000.'))