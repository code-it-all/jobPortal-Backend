const express = require('express')
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config();
var cors = require('cors');