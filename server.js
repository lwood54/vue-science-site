// makes using/creating node server easier
const express = require('express');

// mongoose helps make using mongoDB easier
const mongoose = require('mongoose');

// import path (a provided Node module)
const path = require('path');

// allows use of .env variables for security and not uploading passwords onto github
require('dotenv').config();

// intialize express app
const app = express();

// bodyParser middleware
// Express now comes with a built in bodyParser
app.use(express.json());

// notfiy server to look for routes (these could be put in server.js, but separating this cleans codebase)
const students = require('./routes/api/students');
const authRoute = require('./routes/auth');

// enable CORS
// https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// connect a mongoDB database (I am using mLab cloud mongoDB)
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
                console.log('MongoDB Connected...');
        })
        .catch(err => {
                console.log('Error: ', err);
        });

// Use routes
// anything that comes in and uses /api/students, will refer to the students variable (which connects to the
// routes/api/students.js file)
app.use('/api/student', authRoute);
// app.use('/api/students', students);

// give build instructions for heroku deployment
// Serve static assets 'build' folder if in production
if (process.env.NODE_ENV === 'production') {
        // set static folder
        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
}

// set port that is flexible and may need to be changed by cloud service
const port = process.env.PORT || 5000;

app.listen(port, () => {
        console.log(`Server started on ${port}!`);
});