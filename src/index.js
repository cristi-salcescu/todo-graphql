import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allTodos : {
            merge(existing, incoming) {
              return incoming;  
            }
          }
        }
      }
    }
  })
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
