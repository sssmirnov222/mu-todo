import React from 'react';
import './newTaskForm.css';

export default class NewTaskForm extends React.Component {
  static defaultProps = {
    onSubmit: () => {},
    label: '',
    onChange: () => {},
  };

  static propTypes = {
    onSubmit: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
    label: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'string') return null;
    },
    onChange: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
  };

  state = {
    label: '',
  };

  onChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    if (event.key === 'Enter' && this.state.label !== '') {
      this.props.addList(this.state.label);
      this.setState({
        label: '',
      });
    }
  };

  render() {
    return (
      <div className="header">
        <h1>todos</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onChange}
          onKeyUp={this.onSubmit}
          value={this.state.label}
        />
      </div>
    );
  }
}
