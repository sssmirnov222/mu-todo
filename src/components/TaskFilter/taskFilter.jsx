import React from 'react';
import './taskFilter.css';

const TaskFilter = ({ onShowFilter }) => {
  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={() => onShowFilter('all')}>
          All
        </button>
      </li>
      <li>
        <button onClick={() => onShowFilter('active')}> Active</button>
      </li>
      <li>
        <button onClick={() => onShowFilter('complete')}> Completed</button>
      </li>
    </ul>
  );
};
export default TaskFilter;

TaskFilter.defaultProps = {
  onShowFilter: () => {},
};

TaskFilter.propTypes = {
  onShowFilter: (props, propName) => {
    let value = props[propName];

    if (typeof value === 'object') return null;
  },
};
