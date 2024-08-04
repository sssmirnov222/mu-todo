import React from 'react';
import './taskList.css';
import Task from '../Task/task';

export default class TaskList extends React.Component {
  static defaultProps = {
    listItem: [],
    onDone: () => {},
    onEdition: () => {},
    onDelete: () => {},
    onLabelDelete: () => {},
    onChange: () => {},
    onСheked: () => {},
  };

  static propTypes = {
    listItem: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
    onDone: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
    onEdition: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
    onDelete: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
    onLabelDelete: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
    onChange: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
    onСheked: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
  };

  render() {
    const { listItem, onDone, onEdition, onDelete, onLabelDelete, onChange, onСheked, addList } = this.props;
    let element = listItem.map((item) => {
      return (
        <li key={item.id}>
          <Task
            {...item}
            onDone={() => onDone(item.id)}
            onEdition={() => onEdition(item.id)}
            onDelete={() => onDelete(item.id)}
            onLabelDelete={() => onLabelDelete(item.id)}
            onChange={onChange}
            onСheked={() => onСheked(item.id)}
            addList={() => addList(item.id)}
          />
        </li>
      );
    });
    return <ul className="ul_display">{element}</ul>;
  }
}
