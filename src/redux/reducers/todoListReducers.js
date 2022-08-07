import { actionTypes } from "../actions/actionsTypes";

const initialState = {
  todos: []
};

export default function todos(state=initialState, action) {
  switch (action.type){
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case actionTypes.EDIT_TODO:
      const todoEdited = state.todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
            checked: action.payload.checked,
          }
        }
        return todo;
      })

      return {
        ...state, 
        todos: todoEdited
      }

    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todoElem) => todoElem.id !== action.payload.id)
      }
    default:
      return state;
  }
}