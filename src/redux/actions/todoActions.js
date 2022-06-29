import { actionTypes } from "./actionsTypes"

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