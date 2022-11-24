const express = require('express');
const morgan = require('morgan'); // logging tool

const PORT = 8080;

const app = express();

app.use(morgan('dev'));


