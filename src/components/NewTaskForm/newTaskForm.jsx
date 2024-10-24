import React, { useState } from 'react';
import './newTaskForm.css';

const NewTaskForm = ({ addList }) => {
  const [newList, setNewList] = useState('');
  const [min, setMin] = useState();
  const [sec, setSec] = useState();

  const onChange = (event) => {
    setNewList(event.target.value);
  };

  const onSubmit = (event) => {
    if (!newList.trim()) return;
    if (event.key === 'Enter' && newList !== '' && min !== '' && sec !== '') {
      addList(newList, min, sec);
      setNewList('');
      setMin('');
      setSec('');
    }
  };

  const onChangeMin = (event) => {
    setMin(event.target.value);
  };

  const onChangeSec = (event) => {
    setSec(event.target.value);
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <div className="header-input">
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={onChange}
          onKeyUp={onSubmit}
          value={newList}
        />
        <div className="header-input__timer">
          <input
            type="text"
            className="new-todo"
            placeholder="Min"
            value={min}
            onChange={onChangeMin}
            onKeyUp={onSubmit}
          />
          <input
            type="text"
            className="new-todo"
            placeholder="Sec"
            value={sec}
            onChange={onChangeSec}
            onKeyUp={onSubmit}
          />
        </div>
      </div>
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
