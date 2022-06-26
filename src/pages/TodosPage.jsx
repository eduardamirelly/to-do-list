
import HeaderPage from '../components/Header/HeaderPage'
import CheckboxTodo from '../components/CheckboxTodo/CheckboxTodo'
import ButtonAddTodo from '../components/Button/Buttons/ButtonAddTodo'

function TodoPage() {
  return (
    <div className="flex flex-col items-center bg-dark-900 w-full min-h-[100vh] px-4 py-4">

      <div className="container">
        <HeaderPage>
          <ButtonAddTodo />
        </HeaderPage>
      </div>

      <div className="container">
        {/* <CoverInitialPage /> */}
        {/* <ListTodo title="Lista" /> */}
        <CheckboxTodo />
      </div>

    </div>
  )
}

export default TodoPage