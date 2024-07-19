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

    
    },
    label: (props, propName, componentName) => {
      let value = props[propName];

      if(typeof value === 'string') return null

    },
    onChange: (props, propName, componentName) => {
      let value = props[propName];

      if(typeof value === 'object') return null

     
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
    console.log(e)
    if(e.key==="Enter"){  this.props.addList(this.state.label);
      this.setState({
        label: "",
      });}

  };

  render() {
    return (
      <div className="header" >
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
