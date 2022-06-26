import { actionTypes } from "./actionsTypes"

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: nextTodoId++,
      text
    },
  }
}