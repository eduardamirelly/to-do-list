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