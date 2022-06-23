import React from 'react'

import HeaderPage from '../components/Header/HeaderPage'
import CoverInitialPage from '../components/VoidCovers/CoverInitialPage'
import ListTodo from '../components/ListTodo/ListTodo'
import CheckboxTodo from '../components/CheckboxTodo/CheckboxTodo'

function TodoPage() {
  return (
    <div className="flex flex-col items-center bg-dark-900 w-full min-h-[100vh] px-4 py-4">

      <div className="container">
        <HeaderPage />
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