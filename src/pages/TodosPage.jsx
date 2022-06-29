import HeaderPage from '../components/Header/HeaderPage'
import CheckboxTodo from '../components/CheckboxTodo/CheckboxTodo'
import ButtonAddTodo from '../components/Button/Buttons/ButtonAddTodo'

import { useSelector } from 'react-redux'

function TodosPage() {
  
  const todos = useSelector((state) => state.todoReducers.todos);

  return (
    <div className="flex flex-col items-center bg-dark-900 w-full min-h-[100vh] px-4 py-4">

      <div className="container">
        <HeaderPage>
          <ButtonAddTodo />
        </HeaderPage>
      </div>

      <div className="container">
        {
          todos.map((todo) => (
            <CheckboxTodo text={todo.text} />
          ))
        }
      </div>

    </div>
  )
}

export default TodosPage