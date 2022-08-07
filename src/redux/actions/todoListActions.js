import { actionTypes } from "./actionsTypes"

let nextListId = 0;
let nextTodoId = 0;

export const addTodo = () => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: nextTodoId++,
      text: '',
      checked: false,
    },
  }
}

export const editTodo = (id, text, checked) => {
  return {
    type: actionTypes.EDIT_TODO,
    payload: {
      id,
      text,
      checked,
    },
  }
}

export const deleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: {
      id,
    },
  }
}

export const addList = () => {
  return {
    type: actionTypes.ADD_LIST,
    payload: {
      id: nextListId++,
      title: '',
      todos: [],
    }
  }
}

export const editList = (id, title) => {
  return {
    type: actionTypes.EDIT_LIST,
    payload: {
      id,
      title,
    }
  }
}

export const deleteList = (id) => {
  return {
    type: actionTypes.DELETE_LIST,
    payload: {
      id,
    }
  }
}