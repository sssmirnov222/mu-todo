import React, { useState } from 'react';

import { createRoot } from 'react-dom/client';

import Footer from './components/Footer/footer.jsx';
import NewTaskForm from './components/NewTaskForm/newTaskForm.jsx';
import TaskList from './components/TaskList/taskList.jsx';

const App = () => {
  const [listItem, setListItem] = useState([]);
  const [filter, setFilter] = useState('all');

  const onDone = (id) => {
    const idx = listItem.findIndex((el) => el.id === id);
    const oldId = listItem[idx];
    const newId = { ...oldId, done: !oldId.done, cheked: !oldId.cheked };
    setListItem([...listItem.slice(0, idx), newId, ...listItem.slice(idx + 1)]);
  };

  const onDelete = (id) => {
    const idx = listItem.findIndex((el) => el.id === id);
    setListItem([...listItem.slice(0, idx), ...listItem.slice(idx + 1)]);
  };

  const onEdition = (id) => {
    const idx = listItem.findIndex((el) => el.id === id);
    const oldId = listItem[idx];
    const newId = { ...oldId, edition: !oldId.edition };
    setListItem([...listItem.slice(0, idx), newId, ...listItem.slice(idx + 1)]);
  };

  function createList(label, min, sec) {
    return {
      label,
      min,
      sec,
      id: Date.now(),
      edition: false,
      done: false,
      cheked: false,
    };
  }

  const addList = (text, min, sec) => {
    const newList = createList(text, min, sec);
    setListItem([...listItem, newList]);
  };

  const clearComplete = () => {
    setListItem([]);
  };

  const onShowFilter = (all) => {
    setFilter(all);
  };

  const onChange = (event, id) => {
    const idx = listItem.findIndex((el) => el.id === id);
    const item = listItem[idx];

    item.label = event;
    setListItem([...listItem]);
  };

  let done = listItem.filter((el) => el.done).length;
  let doneCount = listItem.length - done;

  let listItemFilter = [];
  if (filter === 'all') {
    listItemFilter = listItem;
  } else if (filter === 'active') {
    listItemFilter = listItem.filter((el) => el.done === false);
  } else if (filter === 'complete') {
    listItemFilter = listItem.filter((el) => el.done === true);
  }

  return (
    <section className="todoapp">
      <NewTaskForm addList={addList} />
      <TaskList
        listItem={listItemFilter}
        onDone={onDone}
        onEdition={onEdition}
        onDelete={onDelete}
        onChange={onChange}
        addList={addList}
      />
      <Footer clearComplete={clearComplete} doneCount={doneCount} onShowFilter={onShowFilter} />
    </section>
  );
};

export default App;

const domNode = document.getElementById('root');
createRoot(domNode).render(<App />);
