import CheckboxGradient from './components/CheckboxGradient'
import TextareaInput from '../TextInput'

import { useDispatch } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from '../../redux/actions/todoListActions'
import { useState } from 'react'
import { useCallback } from 'react'
import TrashButton from '../TrashButton'

function Todo({ id, listId, text, checked }) {
  const dispatch = useDispatch();
  
  const [textTodo, setTextTodo] = useState(text);

  const autoResize = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  const handleInputText = useCallback((event) => {
    setTextTodo(event.target.value);
    autoResize(event.target);

    dispatch(editTodo(
      listId,
      id, 
      event.target.value, 
      checked,
    ));
  }, [dispatch, textTodo]);


  const handleCheckbox = useCallback(() => {
    dispatch(editTodo(
      listId,
      id, 
      textTodo, 
      !checked,
    ));
  }, [dispatch]);

  const handleDeleteTodo = useCallback(() => {
    dispatch(deleteTodo(id, listId));
  }, [dispatch]);

  const handleKeyEnter = useCallback((event) => {
    if(event.keyCode === 13) {
      dispatch(addTodo(listId));
    }
    else if(event.keyCode === 8 && textTodo.length === 0) {
      dispatch(deleteTodo(id, listId));
    }
  }, [dispatch, textTodo]);
    
  return (
    <div className="to-do">
      <div className="to-do-content">
        <CheckboxGradient 
          handleCheckbox={handleCheckbox} 
          isChecked={checked} 
        />

        <TextareaInput
          handleInput={handleInputText}
          handleKeyEnter={handleKeyEnter}
          text={text}
        />
      </div>

      <TrashButton handleAction={handleDeleteTodo} />
    </div>
  )
}

export default Todo