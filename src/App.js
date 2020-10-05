import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import queries from './queries';
import mutations from './mutations';
import Container from '@material-ui/core/Container';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

function generateNewId(allTodos){
  const ids = allTodos.map(t => t.id);
  return allTodos.length 
      ? Math.max(...ids) + 1
      : 0;
}

function App() {

  const [addTodo, addResponse] = useMutation(mutations.ADD_TODO);
  const [deleteTodo] = useMutation(mutations.DELETE_TODO);
  const [updateTodo] = useMutation(mutations.UPDATE_TODO);
  const { loading, error, data, refetch } =  useQuery(queries.GET_ALL);

  function addTodoAndRefetch(title){
    const id = generateNewId(data.allTodos);
    addTodo({ variables: { id, title } })
      .then(refetch);
  }

  function deleteToAndRefetch(id){
    deleteTodo({ variables: { id } })
      .then(refetch);
  }

  function updateTodoAndRefetch(id, checked){
    updateTodo({ variables: { id, completed: checked } })
  }

  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Error : {error.message}</p>);

  console.log('render')

  return (
    <Container>
      <TodoAdd onSubmit={addTodoAndRefetch}/>
      <TodoList 
        todos = {data.allTodos} 
        onDelete={deleteToAndRefetch} 
        onChange={updateTodoAndRefetch} />      
    </Container>
  );
}

export default App;
