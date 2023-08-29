import React, { useState } from 'react'
import './NewTodoForm.css'
import { connect } from 'react-redux';
import { addTodoRequest } from './thunks';

function NewTodoForm({ todos, onCreatePressed}) {
  const [value, setValue] = useState('');
  const [errorText, setErrorText] = useState('')
  return (
    <>
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
                if(!isDuplicateText && value){
                  onCreatePressed(value)
                  setValue('')
                  setErrorText('')
                }
                if(!value){
                  setErrorText('Please Enter some value')
                } else if(isDuplicateText) {
                  setErrorText('The Todo is Already present')
                }
              }}
            >
              Create Todo
            </button>
          </div>
        </form>
      </div>
      {errorText && <span className='alert alert-danger d-grid' role="alert">{errorText}</span>}
    </>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  onCreatePressed : text=>dispatch(addTodoRequest(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)