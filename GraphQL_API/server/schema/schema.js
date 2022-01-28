const express = require('express')
const expressGraphQL = require('express-graphql')
const lodash = require('lodash');

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = require('graphql')

const app = express()

// create an array tasks that contains these 2 different task objects
const arrayTasks = [
	{ id: '1', title: 'Create your first webpage', weight: 1, description: 'Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close a html tag Open your file in your browser (the page should be blank)'},
	{ id: '2', name: 'Structure your webpage', weight: 1, description: 'Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order'},
]

// create an array project that contains these 2 different project objects
const arrayProjects = [
  { id: '1', title: 'Advanced HTML', weight: 1, description: 'Welcome to the Web Stack specialization. The 3 first projects will give you all basics of the Web development: HTML, CSS and Developer tools. In this project, you will learn how to use HTML tags to structure a web page. No CSS, no styling - don’t worry, the final page will be “ugly” it’s normal, it’s not the purpose of this project. Important note: details are important! lowercase vs uppercase / wrong letter… be careful!'},
  { id: '2', title: 'Bootstrap', weight: 1, description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript design templates for typography, forms, buttons, navigation, and other interface components.'},
]

const TaskType = new GraphQLObjectType({
  name: 'Task',
  description: 'This represents a book written by an author',
  fields: () => ({
    id: { type: (GraphQLString) },
    title: { type: (GraphQLString) },
    weight: { type: (GraphQLInt) },
    description: { type: (GraphQLString) },
    Task: {
      type: TaskType,
      resolve: (parent, args) => {
        return lodash.find(arrayTasks, { id: parent.TaskId});
      }
    }
  })
})

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  description: 'This represents a book written by an author',
  fields: () => ({
    id: { type: (GraphQLID) },
    title: { type: (GraphQLString) },
    weight: { type: (GraphQLInt) },
    description: { type: (GraphQLString) },
    Project: {
      type: ProjectType,
      resolve: (parent, args) => {
        return lodash.find(arrayProjects, { id: parent.ProjectId});
      }
    }
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    Task: {
    type: TaskType,
    args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => {
      lodash.find(arrayTasks, { id: args.id })
      }
    },
    Project: {
      type: ProjectType,
      args: {
          id: { type: GraphQLString }
        },
        resolve: (parent, args) => {
        lodash.find(arrayProjects, { id: args.id })
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

