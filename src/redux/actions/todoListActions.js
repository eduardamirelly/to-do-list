import { actionTypes } from "./actionsTypes"

let nextListId = 0;
let nextTodoId = 0;

// LIST

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

// TODO

export const addTodo = (listId) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: listId,
      todo: {
        id: nextTodoId++,
        text: '',
        checked: false,
      },
    },
  }
}

export const editTodo = (listId, id, text, checked) => {
  return {
    type: actionTypes.EDIT_TODO,
    payload: {
      listId,
      id,
      text,
      checked,
    },
  }
}

export const deleteTodo = (id, listId) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: {
      todoId: id,
      listId
    },
  }
}
