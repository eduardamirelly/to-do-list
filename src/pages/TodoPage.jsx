import React from 'react'
import ButtonAddList from '../components/Button/Buttons/ButtonAddList'
import ButtonAddTodo from '../components/Button/Buttons/ButtonAddTodo'
import ButtonDeleteList from '../components/Button/Buttons/ButtonDeleteList'
import ListTodo from '../components/ListTodo/ListTodo'

function TodoPage() {
  return (
    <div className="flex justify-center items-center bg-dark-900 w-full min-h-[100vh] px-4 py-2">
      <ListTodo title="😐 New List" />
    </div>
  )
}

export default TodoPage