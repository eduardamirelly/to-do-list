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

    case actionTypes.ADD_TODO:
      const listTodo = state.lists.map((list) => {
        if(list.id.toString() === action.payload.id) {
          return {
            ...list,
            todos: [
              ...list.todos,
              {
                id: action.payload.todo.id,
                text: action.payload.todo.text,
                checked: action.payload.todo.checked,
              }
            ],
          }
        }
        return list;
      });

      return {
        ...state,
        lists: listTodo,  
      }
      
    case actionTypes.EDIT_TODO:

      const listTodoEdited = state.lists.map((list) => {
        if(list.id.toString() === action.payload.listId) {
          return {
            ...list,
            todos: list.todos.map((todo) => {
              if(todo.id === action.payload.id) {
                return {
                  ...todo,
                  text: action.payload.text,
                  checked: action.payload.checked,
                }
              }

              return todo;
            })
          }
        }
        return list;
      });

      return {
        ...state, 
        lists: listTodoEdited
      }

    case actionTypes.DELETE_TODO:
      const listTodoDelete = state.lists.map((list) => {
        if(list.id.toString() === action.payload.listId) {
          return {
            ...list,
            todos: list.todos.filter((todo) => todo.id !== action.payload.todoId),
          }
        }
        return list;
      });
      
      return {
        ...state,
        lists: listTodoDelete,
      }

    default:
      return state;
  }
}