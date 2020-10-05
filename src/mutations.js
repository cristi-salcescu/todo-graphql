import { gql } from '@apollo/client';

const ADD_TODO = gql`
  mutation createTodo($id: ID!, $title: String!, $completed: Boolean = false) {
    createTodo(id: $id, title: $title, completed: $completed) {
      id
      title
      completed
    }
  }
`;

const DELETE_TODO = gql`
  mutation removeTodo($id: ID!) {
    removeTodo(id: $id)
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $completed: Boolean!) {
    updateTodo(id: $id, completed: $completed) {
      id
      title
      completed
    }
  }
`;

export default { ADD_TODO, DELETE_TODO, UPDATE_TODO };