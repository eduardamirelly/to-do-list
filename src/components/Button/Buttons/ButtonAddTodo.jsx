

import Button from '../Button'
import CheckPlus from '../../icons/CheckPlus'

function ButtonAddTodo() {
  function handleAddNewTodo() {
    console.log("Add new todo!");
  }

  return (
    <>
      <Button icon={<CheckPlus />} text="Add to-do" handleAction={handleAddNewTodo}/>
    </>
  )
}

export default ButtonAddTodo