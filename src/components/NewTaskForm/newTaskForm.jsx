import React, { useState } from 'react';
import './newTaskForm.css';

const NewTaskForm = ({ addList }) => {
  const [newList, setNewList] = useState('');

  const onChange = (event) => {
    setNewList(event.target.value);
  };

  const onSubmit = (event) => {
    if (!newList.trim()) return;
    if (event.key === 'Enter' && newList !== '') {
      addList(newList);
      setNewList('');
    }
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={onChange}
        onKeyUp={onSubmit}
        value={newList}
      />
    </div>
  );
};

export default NewTaskForm;

NewTaskForm.defaultProps = {
  onSubmit: () => {},
  label: '',
  onChange: () => {},
};

NewTaskForm.propTypes = {
  onSubmit: (props, propName) => {
    let value = props[propName];

    if (typeof value === 'object') return null;
  },
  label: (props, propName) => {
    let value = props[propName];

    if (typeof value === 'string') return null;
  },
  onChange: (props, propName) => {
    let value = props[propName];

    if (typeof value === 'object') return null;
  },
};

//   state = {
//     label: '',
//   };
