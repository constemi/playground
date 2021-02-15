// @ts-nocheck
// Reusable utility functions
import { combineReducers } from '@reduxjs/toolkit';


function updateObject(oldObject: any, newValues: any) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues)
}
  
function updateItemInArray(array: any, itemId: any, updateItemCallback: any) {
  const updatedItems = array.map((item: any) => {
      if (item.id !== itemId) {
      // Since we only want to update one item, preserve all others as they are now
      return item
      }

      // Use the provided callback to create an updated item
      const updatedItem = updateItemCallback(item)
      return updatedItem
  })

  return updatedItems
}
  
function createReducer(initialState: any, handlers: any) {
  return function reducer(state = initialState, action: any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

// Handler for a specific case ("case reducer")
function setVisibilityFilter(visibilityState: any, action: any) {
  // Technically, we don't even care about the previous state
  return action.filter
}

// Handler for an entire slice of state ("slice reducer")
const visibilityReducer = createReducer('SHOW_ALL', {
  SET_VISIBILITY_FILTER: setVisibilityFilter
})
  
// Case reducer
function addTodo(todosState: any, action: any) {
  // concat returns a new array (maintaining immutability)
  const newTodos = todosState.concat({
    id: action.id,
    text: action.text,
    completed: false
  })

  return newTodos
}

// Case reducer
function toggleTodo(todosState: any, action: any) {
  const newTodos = updateItemInArray(todosState, action.id, (todo: any) => {
    return updateObject(todo, { completed: !todo.completed })
  })

  return newTodos
}
  
// Case reducer
function editTodo(todosState: any, action: any) {
  const newTodos = updateItemInArray(todosState, action.id, (todo: any) => {
    return updateObject(todo, { text: action.text })
  })

  return newTodos
}
  
// Slice reducer
const todosSliceReducer = createReducer([], {
  ADD_TODO: addTodo,
  TOGGLE_TODO: toggleTodo,
  EDIT_TODO: editTodo
})
  
// "Combine slices of state into reducer"
const todosReducer = combineReducers({
  visibilityFilter: visibilityReducer,
  todos: todosSliceReducer
})

export { addTodo, editTodo, toggleTodo }
export default todosReducer