import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import TodoForm from 'components/TodoForm';

export default function TodoItem({ id, text, completed, onCheck, onRemove, onEdit }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox
        defaultChecked={completed}
        onCheck={onCheck}
        style={{ width: 'initial', display: 'inline-block' }}
      />
      <TodoForm
        id={id}
        inputStyle={{ textDecoration: completed ? 'line-through' : 'none' }}
        value={text}
        onEnter={onEdit}
      />
      <IconButton onTouchTap={onRemove}>
        <CloseIcon />
      </IconButton>
    </div>
  );
}
