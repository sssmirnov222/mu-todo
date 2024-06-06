import React from "react";
import "./taskFilter.css";

export default class TaskFilter extends React.Component {
  render() {
    const {onShowFilter} = this.props
    return (
      <ul className="filters">
        <li>
          <button class="selected" onClick={() => onShowFilter('all')}>All</button>
        </li>
        <li>
          <button onClick={() => onShowFilter('active')}> Active</button>
        </li>
        <li>
          <button  onClick={() => onShowFilter('complete')}> Completed</button>
        </li>
      </ul>
    );
  }
}