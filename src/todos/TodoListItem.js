import React from "react";
import './TodoListItem.css'

function TodoListItem({ todo, onRemovePressed, onCompletedPressed }) {
  const {_id, text , isCompleted} = todo
  return (
    <div className={`list-group-item ${isCompleted?'list-group-item-success':''}`}>
      <div className="row justify-content-between">
        <h3 className="col-md-6">{text}</h3>
        <div className="col-auto btn-group">
          <button 
            className={`btn ${isCompleted ? 'btn-warning' : 'btn-success'}`} 
            onClick={()=>{onCompletedPressed({...todo, isCompleted: !isCompleted})}}>
            {isCompleted? 'Mark as Incomplete': 'Mark as complete'}
          </button>
          <button className="btn btn-danger" onClick={()=>{onRemovePressed(_id)}}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default TodoListItem;
