import HeaderPage from '../components/HeaderPage'
import Todo from '../components/Todo' 
import ButtonAddList from '../components/Button/ButtonAddList'

import { useSelector } from 'react-redux'

function ListsPage() {
  
  // const lists = useSelector((state) => state.todoReducers.todos);

  return (
    <div className="flex flex-col items-center bg-dark-900 w-full min-h-[100vh] px-4 py-4">

      <div className="container">
        <HeaderPage title="Your Lists">
          <ButtonAddList />
        </HeaderPage>
      </div>

      <div className="container">
        {/* {
          lists.map((lists) => (
            <Todo key={list.id} id={list.id} text={list.text} checked={list.checked} />
          ))
        } */}
      </div>

    </div>
  )
}

export default ListsPage