import React from 'react';
import TaskFilter from '../TaskFilter/taskFilter';
import './footer.css';

const Footer = ({ clearComplete, doneCount, onShowFilter }) => {
  return (
    <footer>
      <span className="todo-count">{doneCount} items left</span>
      <TaskFilter onShowFilter={onShowFilter} />
      <button className="clear-completed" onClick={clearComplete}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;

Footer.defaultProps = {
  clearComplete: () => {},
  doneCount: 1,
  onShowFilter: () => {},
};

Footer.propTypes = {
  clearComplete: (props, propName) => {
    let value = props[propName];

    if (typeof value === 'object') return null;
  },
  doneCount: (props, propName) => {
    let value = props[propName];

    if (typeof value === 'number' && !isNaN(value)) return null;
  },
  onShowFilter: (props, propName) => {
    let value = props[propName];

    if (typeof value === 'object') return null;
  },
};
