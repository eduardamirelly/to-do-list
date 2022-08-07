import CheckboxGradient from './components/CheckboxGradient'
import TextareaInput from '../TextInput'

import { useDispatch } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from '../../redux/actions/todoActions'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import TrashButton from '../TrashButton'

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
  }, [dispatch, textTodo]);


  const handleCheckbox = useCallback(() => {
    setIsChecked(!isChecked);
  }, [dispatch, isChecked]);

  useEffect(() => {
    dispatch(editTodo(
      id, 
      textTodo, 
      isChecked
    ));
  }, [isChecked, textTodo])

  const handleDeleteTodo = useCallback(() => {
    dispatch(deleteTodo(id));
  }, [dispatch]);

  const handleKeyEnter = useCallback((event) => {
    if(event.keyCode === 13) {
      dispatch(addTodo());
    }
    else if(event.keyCode === 8 && textTodo.length === 0) {
      dispatch(deleteTodo(id));
    }
  }, [dispatch, textTodo]);
    
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

      <TrashButton handleAction={handleDeleteTodo} />
    </div>
  )
}

export default Todo