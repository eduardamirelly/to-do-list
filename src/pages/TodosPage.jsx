import HeaderPage from '../components/HeaderPage'
import Todo from '../components/Todo' 
import ButtonAddTodo from '../components/Button/ButtonAddTodo'

import { useSelector } from 'react-redux'

function TodosPage() {
  
  // const todos = useSelector((state) => state.todoList.lists);
  const { listId } = useParams();

  return (
    <div className="flex flex-col items-center bg-dark-900 w-full min-h-[100vh] px-4 py-4">

      <div className="container">
        <HeaderPage title="Your Todo's">
          <ButtonAddTodo />
        </HeaderPage>
      </div>

      <div className="container">
        {
          // todos.map((todo) => (
          //   <Todo key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} />
          // ))
        }
      </div>

    </div>
  )
}

export default TodosPage