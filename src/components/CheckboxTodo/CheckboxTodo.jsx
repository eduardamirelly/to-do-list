import { Trash } from 'phosphor-react'
import { autoResize } from '.'
import CheckboxGradient from '../CheckboxGradient/CheckboxGradient'
import MenuOptions from '../MenuOptions/MenuOptions'
import Option from '../MenuOptions/Option'

import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo } from '../../redux/actions/todoActions'

function CheckboxTodo({ id, text, checked }) {
  const dispatch = useDispatch();
  
  function handleInputText(newTextInput) {
    dispatch(editTodo(
      id,
      newTextInput,
      // checked
    ));
  }

  function handleDeleteTodo() {
    dispatch(deleteTodo(id));
  }
    
  function handleInputHeightText(textarea) {
    autoResize(textarea);
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
        <Option icon={<Trash size={18} weight="regular" />} text="Delete" handleAction={handleDeleteTodo} />
      </MenuOptions>
    </div>
  )
}

export default CheckboxTodo