const express = require('express');
const {graphqlHTTP} = require('express-graphql');
// require the schema.js 
const schema = require('./schema/schema.js')

const app = express();

app.use('/graphql',graphqlHTTP({
  // add schema in an object
  // add the property graphiql: true to constructor to be able to use GraphiQL
  schema,
  graphiql: true
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
