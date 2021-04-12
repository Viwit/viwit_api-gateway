const express = require('express');
const graphqlHttp = require('express-graphql').graphqlHTTP;

const graphqlSchema = require('./graphql/schemas');
const graphqlResolver = require('./graphql/resolvers');

const app = express();

app.use(express.json());

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
  })
);

app.listen(3000);
