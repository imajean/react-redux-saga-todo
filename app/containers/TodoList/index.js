import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from 'components/TodoItem';
import mapStateToProps from './selectors';
import { todoListRemove, todoListToggle, todoListEdit } from './actions';

class TodoList extends Component {
  onCheck = (todo) => {
    // console.log('onCheck');
    this.props.dispatch(todoListToggle(todo.toJS()));
  }
  onRemove = (todo) => {
    // console.log('onRemove');
    const id = todo.get('id');
    this.props.dispatch(todoListRemove({ ids: [id] }));
  }
  onEdit = (newValue, todo) => {
    console.log('onEdit', newValue, todo);
    const id = todo.get('id');
    this.props.dispatch(todoListEdit({ id, text: newValue }));
  }
  renderTodo = (todo) => (
    <TodoItem
      key={todo.get('id')}
      id={todo.get('id')}
      completed={todo.get('completed')}
      text={todo.get('text')}
      onCheck={() => this.onCheck(todo)}
      onRemove={() => this.onRemove(todo)}
      onEdit={(value) => this.onEdit(value, todo)}
    />
  )
  render() {
    const { todos } = this.props;
    return (
      <div>
        {
          todos.map(this.renderTodo)
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(TodoList);
