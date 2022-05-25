import React from 'react'
import ButtonAddList from '../components/Button/Buttons/ButtonAddList'
import ButtonAddTodo from '../components/Button/Buttons/ButtonAddTodo'
import ButtonDeleteList from '../components/Button/Buttons/ButtonDeleteList'

function TodoPage() {
  return (
    <div className="flex justify-center items-center bg-dark-900 w-full h-[100vh]">
      <ButtonAddList />
      <ButtonAddTodo />
      <ButtonDeleteList />
    </div>
  )
}

export default TodoPage