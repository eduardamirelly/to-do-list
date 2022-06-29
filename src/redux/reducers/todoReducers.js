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
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case actionTypes.EDIT_TODO:
      return {
        ...state,
        todos: [
          action.payload
        ]
      }
    default:
      return state;
  }
}