import React from 'react';

import { createRoot } from 'react-dom/client';

import Footer from './components/Footer/footer.jsx';
import NewTaskForm from './components/NewTaskForm/newTaskForm.jsx';
import TaskList from './components/TaskList/taskList.jsx';

class App extends React.Component {
  maxId = 1;

  state = {
    listItem: [],
    todoShow: 'all',
    label: 'ff',
  };

  createElement(label) {
    return {
      label,
      id: this.maxId++,
      edition: false,
      done: false,
      cheked: false,
    };
  }

  addlist = (text) => {
    let newItem = this.createElement(text);

    this.setState(({ listItem }) => {
      let arr = [...listItem, newItem];
      return {
        listItem: arr,
      };
    });
  };

  onCreatrFunc(arr, id, name) {
    let idx = arr.findIndex((el) => el.id === id);
    let oldIt = arr[idx];
    let newIt = { ...oldIt, [name]: !oldIt[name] };

    return [...arr.slice(0, idx), newIt, ...arr.slice(idx + 1)];
  }

  onDone = (id) => {
    this.setState(({ listItem }) => {
      return {
        listItem: this.onCreatrFunc(listItem, id, 'done'),
      };
    });
    this.setState(({ listItem }) => {
      return {
        listItem: this.onCreatrFunc(listItem, id, 'cheked'),
      };
    });
  };

  onDelete = (id) => {
    this.setState(({ listItem }) => {
      let idx = listItem.findIndex((el) => el.id === id);
      return {
        listItem: [...listItem.slice(0, idx), ...listItem.slice(idx + 1)],
      };
    });
  };

  onEdition = (id) => {
    this.setState(({ listItem }) => {
      return {
        listItem: this.onCreatrFunc(listItem, id, 'edition'),
      };
    });
  };

  clearComplete = () => {
    this.setState(({ listItem }) => {
      let complete = listItem.filter((el) => el.done === false);
      return {
        listItem: complete,
      };
    });
  };

  onShowFilter = (all) => {
    this.setState({
      todoShow: all,
    });
  };

  onChange = (event, id) => {
    this.setState(({ listItem }) => {
      let idx = listItem.findIndex((el) => el.id === id);
      let item = listItem[idx];

      item.label = event;
      return {
        listItem: [...listItem],
      };
    });
  };

  render() {
    let done = this.state.listItem.filter((el) => el.done).length;
    let doneCount = this.state.listItem.length - done;

    let listItem = [];

    if (this.state.todoShow === 'all') {
      listItem = this.state.listItem;
    } else if (this.state.todoShow === 'active') {
      listItem = this.state.listItem.filter((el) => el.done === false);
    } else if (this.state.todoShow === 'complete') {
      listItem = this.state.listItem.filter((el) => el.done === true);
    }

    return (
      <section className="todoapp">
        <NewTaskForm addList={this.addlist} />
        <TaskList
          listItem={listItem}
          onDone={this.onDone}
          onEdition={this.onEdition}
          onDelete={this.onDelete}
          onChange={this.onChange}
          addList={this.addlist}
        />
        <Footer clearComplete={this.clearComplete} doneCount={doneCount} onShowFilter={this.onShowFilter} />
      </section>
    );
  }
}

const domNode = document.getElementById('root');
createRoot(domNode).render(<App />);
