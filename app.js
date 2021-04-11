const express = require('express');
const graphqlHttp = require('express-graphql').graphqlHTTP;

const graphqlSchema = require('./graphql/schemas');
const graphqlResolver = require('./graphql/resolvers');

//Routes middleware import
const scoreRoutes = require('./routes/score');

const app = express();

app.use(express.json());

//Routes middleware usage
app.use(scoreRoutes);

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
  })
);

app.listen(3000);
