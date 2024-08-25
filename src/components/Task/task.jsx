import React from 'react';
import './task.css';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends React.Component {
  static defaultProps = {
    label: '',
    onDone: () => {},
    onEdition: () => {},
    done: 1,
    edition: '',
    onDelete: () => {},
    id: 0,
    onChange: () => {},
    cheked: 1,
  };

  static propTypes = {
    label: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'string') return null;
    },
    onDone: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
    onEdition: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
    done: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'number' && !isNaN(value)) return null;
    },
    edition: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'string') return null;
    },
    onDelete: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
    id: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'number' && !isNaN(value)) return null;
    },
    onChange: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'object') return null;
    },
    cheked: (props, propName) => {
      let value = props[propName];

      if (typeof value === 'number' && !isNaN(value)) return null;
    },
  };

  state = {
    text: this.props.label,
    label: this.props.label,
    add: '',
  };

  render() {
    const { label, onDone, onEdition, done, edition, onDelete, id, onChange, cheked } = this.props;

    this.onSubmit = (event) => {
      event.preventDefault();
      if (event.key === 'Enter' && label.length !== 0) {
        onChange(label, id);
        this.setState({
          add: label.slice(this.state.text.length),
          label: label,
          text: label,
        });
        if (!label.trim()) return;
        onEdition();
      }
      if (event.key === 'Escape') {
        onChange(this.state.text, id);
        onEdition();
      }
    };

    //переменные для добавления классов
    let classNames = '';
    let classInp = '';
    let classSpan = '';

    //условия выполнения при нажатии кнопок
    if (done) {
      classNames += 'completed';
    }

    if (edition) {
      classInp += 'editing';
      classSpan += 'none';
    } else {
      classInp += 'none';
      classSpan += 'description';
    }

    //временная переменная
    const createDate = new Date();
    let time = formatDistanceToNow(createDate, { addSuffix: true });

    return (
      <ul className="todo-list">
        <li className={classNames}>
          <div className="taskFlex">
            <input className="toggle" type="checkbox" onClick={onDone} checked={cheked} onChange={() => {}} />

            <label>
              <span className={classSpan} onClick={onDone}>
                {this.state.label}
              </span>

              <div>
                <input
                  className={classInp}
                  type="text"
                  onKeyUp={this.onSubmit}
                  onChange={(event) => onChange(event.target.value, id)}
                  value={label}
                />
              </div>

              <span className="created">created {time}</span>
            </label>
            <button className="icon icon-edit" onClick={onEdition}></button>
            <button className="icon icon-destroy" onClick={onDelete}></button>
          </div>
        </li>
      </ul>
    );
  }
}
