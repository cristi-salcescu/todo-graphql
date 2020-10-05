import { gql } from '@apollo/client';
   
const GET_ALL = gql`
  {
    allTodos {
      id
      title
      completed
    }
  }
`;

export default { GET_ALL };