import React, { useState } from 'react'
import './NewTodoForm.css'
import { connect } from 'react-redux';
import { createTodo, removeTodo } from './actions';

function NewTodoForm({ todos, onCreatePressed}) {
  const [value, setValue] = useState('');
  return (
    <div className="p-3 my-3 bg-body-tertiary rounded">
      <form className='row gy-3'>
        <div className="col-md-9">
          <input 
            type="text" 
            className="form-control"
            value={value}
            onChange={e=>{setValue(e.target.value)}}
          />
        </div>
        <div className='col-md-3 d-grid d-block'>
          <button 
            type='submit' 
            className="btn btn-primary"
            onClick={(e)=> {
              e.preventDefault()
              const isDuplicateText = todos.some(todo => todo.text === value)
              if(!isDuplicateText){
                onCreatePressed(value)
                setValue('')
              }
            }}
          >
            Create Todo
          </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  onCreatePressed : text=>dispatch(createTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)