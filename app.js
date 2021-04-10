const express = require('express');

//Routes middleware import
const scoreRoutes = require('./routes/score');

const app = express();

app.use(express.json());

//Routes middleware usage
app.use(scoreRoutes);

app.listen(3000);