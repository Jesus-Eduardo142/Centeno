//Forma del tutorial: 
//import express from 'express';
//import {graphqlExpress, graphiqlExpress } from 'apollo-server-express'
//const server = express();

//server.use('graphiql', graphiqlExpress({
//    endpointURL:"/graphql"
//}));

//server.listen(4000, () => {
//    console.log('Listening on port 4000')
//});

//Forma que funciona para hacer un servidor GraphQL
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');














