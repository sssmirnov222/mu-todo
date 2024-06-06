import React from "react";
import "./task.css";
import { formatDistanceToNow } from "date-fns";

export default class Task extends React.Component {
  state = {
    val: "",
  };

  onChange = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
    }
    console.log(e.target.value)
    // if(e.target.value == "") return 
    this.setState({
      val: e.target.value,
    });
  };

  
  render() {
    const { label, onDone, onEdition, done, edition, onDelete, onLabelDelete, text } = this.props;

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
    } 
    
    else {
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
            <input className="toggle" type="checkbox" onClick={onDone} />
            <label>
            
              <span className={classSpan} onClick={onDone}>
                {this.state.val} 
              </span>
             
              <form >
                <input
                  className={classInp}
                  type="text"
                  defaultValue={label}
                  onChange={this.onChange}
                  // class = "re"
                  
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
