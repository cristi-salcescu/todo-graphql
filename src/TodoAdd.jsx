import React, {useState} from 'react';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

export default function TodoAdd({onSubmit}) {
  const [title, setTitle] = useState('');

  function add(){
    onSubmit(title);
    setTitle('');
  }

  return (
    <form display="flex" >
        <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <IconButton color="primary" variant="outlined" onClick={add} >
            <AddIcon />
        </IconButton>
    </form>
  );
}
