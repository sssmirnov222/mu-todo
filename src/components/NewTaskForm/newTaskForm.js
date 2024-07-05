import React from "react";
import "./newTaskForm.css";

export default class NewTaskForm extends React.Component {

  static defaultProps = {
    onSubmit: () => {},
    label: "",
    onChange: () => {}
  } 

  static propTypes = {
    onSubmit: (props, propName, componentName) => {
      let value = props[propName];

      if(typeof value === 'object') return null

      return new TypeError(`${componentName} is typeof object`)
    },
    label: (props, propName, componentName) => {
      let value = props[propName];

      if(typeof value === 'string') return null

      return new TypeError(`${componentName} is typeof string`)
    },
    onChange: (props, propName, componentName) => {
      let value = props[propName];

      if(typeof value === 'object') return null

      return new TypeError(`${componentName} is typeof object`)
    } 
  }

  state = {
    label: "",
  };

  onChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addList(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="header" onSubmit={this.onSubmit}>
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onChange}
          value={this.state.label}
        />
      </form>
    );
  }
}
