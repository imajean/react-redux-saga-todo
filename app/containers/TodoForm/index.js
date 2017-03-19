import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoFormComp from 'components/TodoForm';
import { todoFormEnter } from './actions';

class TodoForm extends Component {
  onEnter = (value) => {
    this.props.todoFormEnter({ text: value });
  }
  render() {
    const { hintText } = this.props;
    return (
      <TodoFormComp
        onEnter={this.onEnter}
        hintText={hintText}
        clearOnSubmit
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  todoFormEnter(payload) {
    dispatch(todoFormEnter(payload));
  },
});

export default connect(null, mapDispatchToProps)(TodoForm);
