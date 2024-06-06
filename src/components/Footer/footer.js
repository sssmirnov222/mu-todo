import React from "react";
import TaskFilter from "../TaskFilter/taskFilter";
import "./footer.css";


export default class Footer extends React.Component {
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
