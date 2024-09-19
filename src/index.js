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

  function createList(label) {
    return {
      label,
      id: Date.now(),
      edition: false,
      done: false,
      cheked: false,
    };
  }

  const addList = (text) => {
    const newList = createList(text);
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

// class App extends React.Component {
//   maxId = 1;

//   state = {
//     listItem: [],
//     todoShow: 'all',
//     label: 'ff',
//   };

//   createElement(label) {
//     return {
//       label,
//       id: this.maxId++,
//       edition: false,
//       done: false,
//       cheked: false,
//     };
//   }

//   addlist = (text) => {
//     let newItem = this.createElement(text);

//     this.setState(({ listItem }) => {
//       let arr = [...listItem, newItem];
//       return {
//         listItem: arr,
//       };
//     });
//   };

//   onCreatrFunc(arr, id, name) {
//     let idx = arr.findIndex((el) => el.id === id);
//     let oldIt = arr[idx];
//     let newIt = { ...oldIt, [name]: !oldIt[name] };

//     return [...arr.slice(0, idx), newIt, ...arr.slice(idx + 1)];
//   }

//   onDone = (id) => {
//     this.setState(({ listItem }) => {
//       return {
//         listItem: this.onCreatrFunc(listItem, id, 'done'),
//       };
//     });
//     this.setState(({ listItem }) => {
//       return {
//         listItem: this.onCreatrFunc(listItem, id, 'cheked'),
//       };
//     });
//   };

//   onDelete = (id) => {
//     this.setState(({ listItem }) => {
//       let idx = listItem.findIndex((el) => el.id === id);
//       return {
//         listItem: [...listItem.slice(0, idx), ...listItem.slice(idx + 1)],
//       };
//     });
//   };

//   onEdition = (id) => {
//     this.setState(({ listItem }) => {
//       return {
//         listItem: this.onCreatrFunc(listItem, id, 'edition'),
//       };
//     });
//   };

//   clearComplete = () => {
//     this.setState(({ listItem }) => {
//       let complete = listItem.filter((el) => el.done === false);
//       return {
//         listItem: complete,
//       };
//     });
//   };

//   onShowFilter = (all) => {
//     this.setState({
//       todoShow: all,
//     });
//   };

//   onChange = (event, id) => {
//     this.setState(({ listItem }) => {
//       let idx = listItem.findIndex((el) => el.id === id);
//       let item = listItem[idx];

//       item.label = event;
//       return {
//         listItem: [...listItem],
//       };
//     });
//   };

//   render() {
//     let done = this.state.listItem.filter((el) => el.done).length;
//     let doneCount = this.state.listItem.length - done;

//     let listItem = [];

//     if (this.state.todoShow === 'all') {
//       listItem = this.state.listItem;
//     } else if (this.state.todoShow === 'active') {
//       listItem = this.state.listItem.filter((el) => el.done === false);
//     } else if (this.state.todoShow === 'complete') {
//       listItem = this.state.listItem.filter((el) => el.done === true);
//     }

//     return (
//       <section className="todoapp">
//         <NewTaskForm addList={this.addlist} />
//         <TaskList
//           listItem={listItem}
//           onDone={this.onDone}
//           onEdition={this.onEdition}
//           onDelete={this.onDelete}
//           onChange={this.onChange}
//           addList={this.addlist}
//         />
//         <Footer clearComplete={this.clearComplete} doneCount={doneCount} onShowFilter={this.onShowFilter} />
//       </section>
//     );
//   }
// }

const domNode = document.getElementById('root');
createRoot(domNode).render(<App />);
