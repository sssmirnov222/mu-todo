import React from "react";
import "./newTaskForm.css";

export default class NewTaskForm extends React.Component {
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
          autofocus
          onChange={this.onChange}
          value={this.state.label}
        />
      </form>
    );
  }
}
