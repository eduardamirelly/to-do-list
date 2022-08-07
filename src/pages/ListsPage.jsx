import HeaderPage from '../components/HeaderPage'
import ButtonAddList from '../components/Button/ButtonAddList'

import { useSelector } from 'react-redux'
import ListTodo from '../components/ListTodo';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

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
        {
          lists.map((list) => (
            <ListTodo key={list.id} id={list.id} title={list.title} />
          ))
        }
      </div>

    </div>
  )
}

export default ListsPage