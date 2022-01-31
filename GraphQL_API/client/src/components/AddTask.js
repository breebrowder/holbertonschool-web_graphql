import { getProjectsQuery } from '../queries/queries';
import { graphql } from 'react-apollo';



  function displayProjects() {
    //  console.log(props);
    var data = props.data;
    if (data.loading) {
      return ( <option> Loading projects... </option>);
      }
      else {
        return data.projects.map(project => {
            return ( <option key = {
                project.id
              }
              value = {
                project.id
              } > {
                project.title
              } </option>);
            })
        }
      }

export default graphql(getProjectsQuery)(AddTask);