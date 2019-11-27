const express = require('express');
const graphqlHTTp = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')

const app = express();

// connect to mlab database

mongoose.connect('mongodb://faisal:faisal123029@ds239940.mlab.com:39940/graphql', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});


app.use('/graphql', graphqlHTTp({
    schema,
    graphiql: true
}))

app.listen(4000, (() => {
    console.log('now listening for request for port 4000');
}));