import { applyMiddleware, combineReducers, createStore } from "redux"
import { todos, isLoading } from "./todos/reducers"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const reducers = {
  todos,
  isLoading,
}

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}

const rootReducers = combineReducers(reducers)

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const configureStore = () => 
  createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
    // window.__REDUX_DEVTOOLS_EXTENSIONS__ &&
    // window.__REDUX_DEVTOOLS_EXTENSIONS__(),
  )