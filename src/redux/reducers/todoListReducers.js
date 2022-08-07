import { actionTypes } from "../actions/actionsTypes";

const initialState = {
  lists: [],
};

export default function todoList(state=initialState, action) {
  switch (action.type){
    case actionTypes.ADD_LIST:
      return {
        ...state,
        lists: [
          ...state.lists,
          action.payload,
        ],
      }

    case actionTypes.EDIT_LIST:
      const listEdited = state.lists.map((list) => {
        if(list.id === action.payload.id) {
          return {
            ...list,
            title: action.payload.title,
          }
        }

        return list;
      });

      return {
        ...state,
        lists: listEdited,
      }

    case actionTypes.DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload.id),
      }

    // case actionTypes.ADD_TODO:
    //   return {
    //     ...state,
    //     todos: [
    //       ...state.todos,
    //       action.payload
    //     ]
    //   }
    // case actionTypes.EDIT_TODO:
    //   const todoEdited = state.todos.map((todo) => {
    //     if(todo.id === action.payload.id) {
    //       return {
    //         ...todo,
    //         text: action.payload.text,
    //         checked: action.payload.checked,
    //       }
    //     }
    //     return todo;
    //   })

    //   return {
    //     ...state, 
    //     todos: todoEdited
    //   }

    // case actionTypes.DELETE_TODO:
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todoElem) => todoElem.id !== action.payload.id)
    //   }
    default:
      return state;
  }
}