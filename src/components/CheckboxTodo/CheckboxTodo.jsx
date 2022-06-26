import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { autoResize } from '.'
import CheckboxGradient from '../CheckboxGradient/CheckboxGradient'
import MenuOptions from '../MenuOptions/MenuOptions'
import Option from '../MenuOptions/Option'

function CheckboxTodo() {

  const [todoText, setTodoText] = useState('');

  function handleInputHeightText(textarea) {
    autoResize(textarea);
  }
  
  function handleInputText(text) {
    setTodoText(text);
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
          value={todoText}
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