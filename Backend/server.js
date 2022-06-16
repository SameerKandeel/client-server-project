const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({path: '../' +__dirname + '/.env'})

const port = process.env.PORT || process.env['PORT'];
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const uri = "mongodb+srv://client-server-project:client-server@cluster0.adl3q.mongodb.net/test";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const promocodeRouter = require('./routes/promocodes');
const usersRouter = require('./routes/users');

app.use('/promocodes', promocodeRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log('../' + {__dirname})
    console.log(`Server is running on port: ${port}`);
});
