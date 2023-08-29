import { createTodo, loadTodosFailure, loadTodosInProgress, loadTodosSuccess, removeTodo, toggleMarkTodoAsCompleted } from "./actions"

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:4000/todos');
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure())
    dispatch(displayAlert(e))
  }
}

export const addTodoRequest = text => async dispatch => {
  try {
    const body = JSON.stringify({text})
    const response = await fetch('http://localhost:4000/todos',{
      headers : {
        'content-type':'application/json',
      },
      method : 'post',
      body,
    })
    const todo = await response.json();
    dispatch(createTodo(todo))
  } catch (e) {
    dispatch(displayAlert(e))
  }
}

export const deleteTodoRequest = id => async dispatch => {
  try {
    const response = await fetch(`http://localhost:4000/todo/${id}`,{
      headers : {
        'content-type':'application/json',
      },
      method : 'delete',
    })
    const removedTodo = await response.json();
    dispatch(removeTodo(id))
  } catch (e) {
    dispatch(displayAlert(e))
  }
}

export const updateCompetionStaus = todo => async dispatch => {
  const {isCompleted, _id} = todo
  const body = JSON.stringify({isCompleted})
  try {
    const response = await fetch(`http://localhost:4000/todo/${_id}`,{
      headers : {
        'content-type':'application/json',
      },
      method : 'put',
      body,
    })
    const todo = await response.json();
    dispatch(toggleMarkTodoAsCompleted(todo))
  } catch(e) {
    dispatch(displayAlert(e))
  }
}

export const displayAlert = text => () => {
  alert(text)
}