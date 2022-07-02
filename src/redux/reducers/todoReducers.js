import { actionTypes } from "../actions/actionsTypes";

const initialState = {
  todos: [
    // {
    //   id: 0,
    //   text: '',
    //   checked: false,
    // }
  ]
};

export default function todoReducers(state=initialState, action) {
  switch (action.type){
    case actionTypes.ADD_TODO:
      //State Evolution, old to new state
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case actionTypes.EDIT_TODO:
      //Get the state and replace the todo[id] with the same id
      return {
        ...state,
        todos: [
          ...state.todos.filter((todoElem) => todoElem.id !== action.payload.id),
          action.payload
        ]
      }

    case actionTypes.DELETE_TODO:
      //Filter one state with different id and this return undefined
      return {
        ...state,
        todos: state.todos.filter((todoElem) => todoElem.id !== action.payload.id)
      }
    default:
      return state;
  }
}