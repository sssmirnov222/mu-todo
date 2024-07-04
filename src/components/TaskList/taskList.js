import React from "react";
import "./taskList.css";
import Task from "../Task/task";

export default class TaskList extends React.Component {
  render() {
    const { listItem, onDone, onEdition, onDelete, onLabelDelete, onChange, onСheked} = this.props;
    let element = listItem.map((item) => {
      return (
        <li key={item.id}>
          <Task
            {...item}
            onDone={() => onDone(item.id)}
            onEdition={() => onEdition(item.id)}
            onDelete={() => onDelete(item.id)}
            onLabelDelete = {() => onLabelDelete(item.id)}
            onChange={onChange}
            onСheked = {() => onСheked(item.id)}
          />
        </li>
      );
    });
    return <ul className="ul_display">{element}</ul>;
  }
}
