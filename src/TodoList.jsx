import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';

function PostList({todos, onDelete, onChange}) {
  return (
    <div>
      <List>
        {todos.map(todo =>
          <React.Fragment key={todo.id}>
            <ListItem button >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                onChange={e => onChange(todo.id, e.target.checked)}
              />
            </ListItemIcon>
              <ListItemText primary={todo.title} />
              <ListItemSecondaryAction>
                <IconButton color="primary" onClick={() => onDelete(todo.id)} >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        )}  
      </List>
    </div>
  );
}

export default PostList;
