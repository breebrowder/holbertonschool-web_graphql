const express = require('express')
const expressGraphQL = require('express-graphql')
const lodash = require('lodash');

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql')

const app = express()

// create an array tasks that contains these 2 different task objects
const arrayTasks = [
	{ id: 1, title: 'Create your first webpage', weight: 1, description: 'Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close a html tag Open your file in your browser (the page should be blank)'},
	{ id: 2, name: 'Structure your webpage', weight: 1, description: 'Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order'},
]


const TaskType = new GraphQLObjectType({
  name: 'Task',
  description: 'This represents a book written by an author',
  fields: () => ({
    id: { type: (GraphQLString) },
    title: { type: (GraphQLString) },
    weight: { type: (GraphQLInt) },
    description: { type: (GraphQLString) },
    fieldTask: {
      type: TaskType,
      resolve: (parent, args) => {
        return lodash.find(fieldTask, { id: parent.fieldTaskId});
      }
    }
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    fieldTask: {
    type: TaskType,
    args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => {
      lodash.find(fieldTask, { id: args.id })
      }
    },
  })
})

// export your GraphQLSchema with your RootQuery
const schema = new GraphQLSchema({
    query: RootQueryType
    // mutation: RootMutationType
})

// export your GraphQLSchema with your RootQuery at the end of the file
module.exports = schema;
exports.schema = new GraphQLSchema({query: RootQueryType});

