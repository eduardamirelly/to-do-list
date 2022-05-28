import { Trash } from 'phosphor-react'
import React from 'react'
import CheckboxGradient from '../CheckboxGradient/CheckboxGradient'
import MenuOptions from '../MenuOptions/MenuOptions'
import Option from '../MenuOptions/Option'

function CheckboxTodo(props) {
  return (
    <div className="to-do">
      <div className="to-do-content">
        <CheckboxGradient />
        { props.todo }
      </div>

      <MenuOptions>
        <Option icon={<Trash size={18} weight="regular" />} text="Delete" />
      </MenuOptions>
    </div>
  )
}

export default CheckboxTodo