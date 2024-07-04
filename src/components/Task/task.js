import React from "react";
import "./task.css";
import { formatDistanceToNow } from "date-fns";

export default class Task extends React.Component {

  // state = {
  //   checked: false
  // }

 
   onEdit = (event) => {
    if (event.keyCode == 13) {
      event.preventDefault();
  }
   }

  render() {
    const {
      label,
      onDone,
      onEdition,
      done,
      edition,
      onDelete,
      id,
      onChange,
      cheked,
    } = this.props;

    //переменные для добавления классов
    let classNames = "";
    let classInp = "";
    let classSpan = "";
    

    //условия выполнения при нажатии кнопок
    if (done) {
      classNames += "completed";
    }

    if (edition) {
      classInp += "editing";
      classSpan += "none";
    } else {
      classInp += "none";
      classSpan += "description";
    }

    //временная переменная
    const createDate = new Date();
    let time = formatDistanceToNow(createDate, { addSuffix: true });

    return (
      <ul className="todo-list">
        <li className={classNames}>
          <div className="taskFlex">
            <input className='toggle' type="checkbox" onClick={onDone} checked={cheked} />

            <label >
              <span className={classSpan} onClick={onDone} >
                {label}
              </span>

              <form >
                <input
                  className={classInp}
                  type="text"
                  defaultValue={label}
                  onChange={(e) => onChange(e.target.value, id)}
                  onkeypress={(e) => e.preventDefault()}
                />
              </form>

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
