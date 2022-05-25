import React from 'react'

import Button from '../Button'
import CheckPlus from '../../icons/CheckPlus'

function ButtonAddTodo() {
  return (
    <>
      <Button icon={<CheckPlus />} text="Add to-do" />
    </>
  )
}

export default ButtonAddTodo