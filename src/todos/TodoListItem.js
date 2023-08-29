import React from "react";
import './TodoListItem.css'

function TodoListItem({ todo, onRemovePressed }) {
  return (
    <div className="list-group-item">
      <div className="row justify-content-between">
        <h3 className="col-md-6">{todo.text}</h3>
        <div className="col-auto btn-group">
          <button className="btn btn-success">Mark as complete</button> 
          <button className="btn btn-danger" onClick={()=>{onRemovePressed(todo.text)}}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default TodoListItem;
