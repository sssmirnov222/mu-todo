import React from 'react';
import './taskFilter.css';

export default class TaskFilter extends React.Component {
  static defaultProps = {
    onShowFilter: () => {},
  };

  static propTypes = {
    onShowFilter: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
  };

  render() {
    const { onShowFilter } = this.props;
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
  }
}
