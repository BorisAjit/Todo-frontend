import React, { useEffect } from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import { connect } from 'react-redux'
import { deleteTodoRequest, loadTodos, updateCompetionStaus } from './thunks'

function TodoList( {todos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos} ) {
  useEffect(()=>{
    startLoadingTodos()
  },[])
  const loadingMessage = (<div>Loading todos...</div>)
  const content = (
    <div>
      <NewTodoForm/>
      <div className="list-group">
        {todos && todos.map(todo=>
          <TodoListItem 
            key={todo._id} 
            todo={todo} 
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          />)}
      </div>
    </div>
  )
  return (
    isLoading ? loadingMessage : content
  )
}

const mapStateToProps = state => ({
  todos : state.todos,
  isLoading : state.isLoading,
})

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed : id => dispatch(deleteTodoRequest(id)),
  onCompletedPressed : todo => dispatch(updateCompetionStaus(todo)),
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)