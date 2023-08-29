import React from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import { connect } from 'react-redux'
import { removeTodo } from './actions'

function TodoList( {todos, onRemovePressed} ) {
  return (
    <div className=''>
      <NewTodoForm/>
      <div className="list-group">
        {todos && todos.map(todo=><TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovePressed}/>)}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  todos : state.todos,
})

const mapDispatchToProps = dispatch => ({
  onRemovePressed : text => dispatch(removeTodo(text)),
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)