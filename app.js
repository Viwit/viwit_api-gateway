const express = require('express');
const graphqlHttp = require('express-graphql').graphqlHTTP;
var cors = require('cors');


const graphqlSchema = require('./graphql/schemas');
const graphqlResolvers = require('./graphql/resolvers');

const app = express();

app.use(cors());
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
