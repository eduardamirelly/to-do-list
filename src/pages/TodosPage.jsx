import HeaderPage from '../components/HeaderPage'
import Todo from '../components/Todo' 
import ButtonAddTodo from '../components/Button/ButtonAddTodo'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CoverVoidTodo from '../components/VoidCovers/CoverVoidTodo'

function TodosPage() {
  
  const { listId } = useParams();
  const lists = useSelector((state) => state.todoList.lists);
  const listClicked = lists.filter((list) => list.id.toString() === listId)[0];
  
  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] px-4 py-4">

      <div className="container">
        <HeaderPage title={listClicked.title} isReturn={true}>
          <ButtonAddTodo listId={listId} />
        </HeaderPage>
      </div>

      <div className="container">
        {listClicked.todos.length < 1 ? (
          <CoverVoidTodo />
        )
        :
        (
          listClicked.todos.map((todo) => (
            <Todo key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} listId={listId} />
          ))
        )}
      </div>

    </div>
  )
}

export default TodosPage