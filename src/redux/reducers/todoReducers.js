import { actionTypes } from "../actions/actionsTypes";

const initialState = {
  id: null,
  text: '',
  checked: false,
}

export default function todoReducers(state=initialState, action) {
  switch (action.type){
    case actionTypes.ADD_TODO:
      return state;

    default:
      return state;
  }
}