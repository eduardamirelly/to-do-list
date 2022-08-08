import HeaderPage from '../components/HeaderPage'
import ButtonAddList from '../components/Button/ButtonAddList'
import CoverInitialPage from '../components/VoidCovers/CoverInitialPage';

import { useSelector } from 'react-redux'
import ListTodo from '../components/ListTodo';

function ListsPage() {
  
  const lists = useSelector((state) => state.todoList.lists);

  return (
    <div className="flex flex-col items-center bg-dark-900 w-full min-h-[100vh] px-4 py-4">

      <div className="container">
        <HeaderPage title="To do | Your Lists">
          <ButtonAddList />
        </HeaderPage>
      </div>

      <div className="container">
        {lists.length < 1 ? (
          <CoverInitialPage />
        )
        :
        (
          lists.map((list) => (
            <ListTodo key={list.id} id={list.id} title={list.title} />
          ))
        )}
        
      </div>

    </div>
  )
}

export default ListsPage