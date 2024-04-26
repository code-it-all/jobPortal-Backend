const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const dotenv = require("dotenv");
var cors = require("cors");
const errorHandler = require("./middleware/error");
=======

var cors = require("cors");
const errorHandler = require("./middleware/error");
const dotenv = require("dotenv");
>>>>>>> a29f7077ce1e1f2a9b867bc387d8eaa2dbc680d4
dotenv.config();
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");

// console.log(process.env.DATABASE)
<<<<<<< HEAD
// //database connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));
=======
// //database connectionnp
mongoose
  .connect("mongodb://localhost:27017/jobZee")
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });
>>>>>>> a29f7077ce1e1f2a9b867bc387d8eaa2dbc680d4

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());

app.use("/", authRoutes);

//middleware for error handling
app.use(errorHandler);

<<<<<<< HEAD
let port = process.env.PORT || 3001;
app.listen(port, () => console.log("Server running at port 3001."));
=======
// let port = process.env.PORT || 3001;
const port = 9000;
app.listen(port, () => console.log("Server running at port "));
>>>>>>> a29f7077ce1e1f2a9b867bc387d8eaa2dbc680d4
