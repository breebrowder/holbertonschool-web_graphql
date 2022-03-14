# holbertonschool-web_graphql

## Project

1. [GraphQL API](https://intranet.hbtn.io/projects/2440)

### Background Context
In this project, you will create an application using a query language, designed to make APIs fast, flexible and developer-friendly. In the first part, you will create the back-end part using ExpressJs and set up GraphQl with all the parts (schema, root query and resolve function). In second part, you will connect your back-end to mongoDB and test your queries to GraphQL server using Graphiql. In the last part, you will create the front-end part using ReactJS and the GraphQL Client Apollo.


### Requirements
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the js extension


### Setup
### Install NodeJS
(in your home directory):

```
sudo apt install nodejs 
```
```
$ node -v
v12.x.x
$ npm -v
...
```

### Setup Express and GraphQL
In your folder server of GraphQL server:

* Add package.json using: npm init
* Install Express in the directory and save it in the dependencies list using: npm install express --save
* Set up GraphQL using: npm install graphql express-graphql


#### Setup Apollo
```
npm i apollo-boost graphql react-apollo –save
```