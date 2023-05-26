//import mongoose
const mongoose = require('mongoose');

//connect to mongodb
const mongodbURI = 'mongodb+srv://sergenkizil:Jmuatgm+61@dbcloud.82xg8gt.mongodb.net/';
const mongodbName = 'MovieAppDB';
const connection =  mongoose.connect(mongodbURI+mongodbName);

//check mongodb connection
connection.then((db) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('MongoDB connection error: ', err);
});

//export mongoose
//module.exports = () => {connection}

module.exports = connection;