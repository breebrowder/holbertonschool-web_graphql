import { Component } from 'react';
import { graphql } from 'react-apollo';
import TaskDetails from './TaskDetails';
import { getTasksQuery } from '../queries/queries';





export default graphql(getTasksQuery)(TaskList);