const express = require('express');
const {graphqlHTTP} = require('express-graphql');
// require the schema.js 
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect(`mongodb+srv://6FlaZOaZ2MVdV7jc:6FlaZOaZ2MVdV7jc@breescluster.njmby.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);



mongoose.connection.once('open', () => {console.log('connected to database');}
);

// localhost /graphql runs the code in here
app.use('/graphql',graphqlHTTP({
  // add schema in an object
  // add the property graphiql: true to constructor to be able to use GraphiQL
  schema: schema, // defining a schema is how graphql knows which data to access based on query being sent
  graphiql: true // gives us a user interface to access our server without having to manually call it through something like Postman
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
