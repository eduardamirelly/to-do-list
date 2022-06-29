import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { autoResize } from '.'
import CheckboxGradient from '../CheckboxGradient/CheckboxGradient'
import MenuOptions from '../MenuOptions/MenuOptions'
import Option from '../MenuOptions/Option'

import { useDispatch } from 'react-redux'
import { editTodo } from '../../redux/actions/todoActions'

function CheckboxTodo({ id, text, checked }) {
  const dispatch = useDispatch();

  function handleInputHeightText(textarea) {
    autoResize(textarea);
  }
  
  function handleInputText(newTextInput) {
    console.log(id);
    console.log(newTextInput);

    dispatch(editTodo(
      id,
      newTextInput,
      checked
    ));
  }

  function handleEditableText(event, textarea) {
    if(event.key == "Enter") {
      textarea.disabled = true;
    }
    if(event.keyCode == 8 && textarea.value == '') {
      
    }
  }

  function handleActiveInputText(textarea) {
    textarea.disabled = false;
  }

  return (
    <div className="to-do">
      <div className="to-do-content">
        <CheckboxGradient />
        <textarea 
          onInput={(e) => handleInputHeightText(e.target)}
          onChange={(e) => handleInputText(e.target.value)}
          onKeyDown={(e) => handleEditableText(e, e.target)}
          onClick={(e) => handleActiveInputText(e.target)}
          value={text}
          rows="1"
        >
        </textarea>
      </div>

      <MenuOptions>
        <Option icon={<Trash size={18} weight="regular" />} text="Delete" />
      </MenuOptions>
    </div>
  )
}

export default CheckboxTodo