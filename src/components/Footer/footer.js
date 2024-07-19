import React from "react";
import TaskFilter from "../TaskFilter/taskFilter";
import "./footer.css";


export default class Footer extends React.Component {

  static defaultProps = {
    clearComplete: () => {},
    doneCount: 1,
    onShowFilter: () => {}
  } 

  static propTypes = {
    clearComplete: (props, propName, componentName) => {
      let value = props[propName];

      if(typeof value === 'object') return null

      
    },
    doneCount: (props, propName, componentName) => {
      let value = props[propName];

      if(typeof value === 'number' && !isNaN(value)) return null

      
    },
    onShowFilter: (props, propName, componentName) => {
      let value = props[propName];

      if(typeof value === 'object') return null

    } 
  }

  render() {
    const {clearComplete, doneCount, onShowFilter} = this.props
    return (
      <footer>
        <span className="todo-count">{doneCount} items left</span>
        <TaskFilter 
        onShowFilter = {onShowFilter}
        />
        <button className="clear-completed"
        onClick={clearComplete}>Clear completed</button>
      </footer>
    );
  }
}
