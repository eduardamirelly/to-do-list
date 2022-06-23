import { actionTypes } from "./actionsTypes"

export const addTodo = (text) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: text,
  }
}