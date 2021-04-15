const express = require('express');
const graphqlHttp = require('express-graphql').graphqlHTTP;

const graphqlSchema = require('./graphql/schemas');
const graphqlResolvers = require('./graphql/resolvers');

const app = express();

app.use(express.json());

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: {...graphqlResolvers},
    graphiql: true
  })
);

app.listen(3000);
