import { Component } from 'react';
import { graphql } from 'react-apollo';
import TaskDetails from './TaskDetails';
import { getTasksQuery } from '../queries/queries';

function displayTasks() {
  console.log(props.data);
  var data = props.data;

  if (data.loading) {
    return ( <div> Loading tasks... </div>);
    }
    else {
      return data.tasks.map(task => {
          return ( <li key = {
              task.id
            }
            onClick = {
              (e) => {
                setState({
                  selected: task.id
                });
              }
            } > {
              task.title
            } </li>);
          })
      }
   }



export default graphql(getTasksQuery)(TaskList);