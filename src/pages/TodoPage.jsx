import { PlusCircle } from 'phosphor-react'
import React from 'react'
import Button from '../components/Button/Button'

function TodoPage() {
  return (
    <div className="flex justify-center items-center bg-dark-900 w-full h-[100vh]">
      <Button icon={<PlusCircle />} text="Add new List" />
    </div>
  )
}

export default TodoPage