import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
    };
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }
  handleKeyDown = (event) => {
    // console.log('handleKeyDown', event, event.which, this.state.value);
    if (event.which === 13) {
      const { onEnter, clearOnSubmit } = this.props;
      onEnter(this.state.value);

      if (clearOnSubmit) {
        this.setState({ value: '' });
      }
    }
  }
  render() {
    const { id = 'TodoForm', ...other } = this.props;
    const { value } = this.state;
    return (
      <div>
        <TextField
          {...other}
          id={id}
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}
