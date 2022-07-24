import { Trash } from 'phosphor-react'
import CheckboxGradient from './components/CheckboxGradient'
import MenuOptions from '../MenuOptions'
import Option from '../MenuOptions/components/Option'
import TextareaInput from '../TextInput'

import { useDispatch } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from '../../redux/actions/todoActions'
import { useState } from 'react'
import { useCallback } from 'react'

function Todo({ id }) {
  const dispatch = useDispatch();
  
  const [textTodo, setTextTodo] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const autoResize = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  const handleInputText = useCallback((event) => {
    setTextTodo(event.target.value);
    autoResize(event.target);

    dispatch(editTodo(
      id,
      textTodo,
      isChecked
    ));
  }, [dispatch, textTodo, isChecked]);


  const handleCheckbox = useCallback(() => {
    setIsChecked(!isChecked);

    dispatch(editTodo(
      id,
      textTodo,
      isChecked
    ));
  }, [dispatch, textTodo, isChecked]);

  const handleDeleteTodo = useCallback(() => {
    dispatch(deleteTodo(id));
  }, [dispatch]);

  const handleKeyEnter = useCallback((event) => {
    if(event.keyCode === 13) {
      dispatch(addTodo());
    }
  }, [dispatch]);
    
  return (
    <div className="to-do">
      <div className="to-do-content">
        <CheckboxGradient 
          handleCheckbox={handleCheckbox} 
          isChecked={isChecked} 
        />

        <TextareaInput
          handleInput={handleInputText}
          handleKeyEnter={handleKeyEnter}
          text={textTodo}
        />
      </div>

      <MenuOptions>
        <Option icon={<Trash size={18} weight="regular" />} text="Delete" handleAction={handleDeleteTodo} />
      </MenuOptions>
    </div>
  )
}

export default Todo