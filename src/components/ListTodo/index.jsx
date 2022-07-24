import { CaretRight } from 'phosphor-react'
import TextareaInput from '../TextInput'

import ListTrash from './ListTrash'

import { useCallback } from 'react'
import { useState } from 'react'

function ListTodo(props) {

  const [textList, setTextList] = useState('');

  const handleInputText = useCallback((event) => {
    setTextList(event.target.value);
  }, []);

  const handleDeleteList = useCallback(() => {
    //
  }, []);

  const handleKeyEnter = useCallback((event) => {
    //
  }, []);


  return (
    <div className="list">
      <ListTrash />

      <TextareaInput 
        handleInput={handleInputText}
        handleKeyEnter={handleKeyEnter}
        text={textList}
      />
      
      { props.title }
      <CaretRight size={32} weight="regular" />
    </div>
  )
}

export default ListTodo