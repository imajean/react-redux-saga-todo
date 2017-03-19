import React, { Component } from 'react';
import TodoForm from 'containers/TodoForm';
import TodoList from 'containers/TodoList';
import TodoFooter from 'containers/TodoFooter';

export default class TodoApp extends Component {
  render() {
    console.log('TodoApp', this.props);
    const activeFilter = this.props.params.activeFilter;

    return (
      <div>
        <TodoForm hintText="What needs to be done?" />
        <TodoList activeFilter={activeFilter} />
        <TodoFooter activeFilter={activeFilter} />
      </div>
    );
  }
}
