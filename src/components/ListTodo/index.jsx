import { CaretRight } from 'phosphor-react'
import TextareaInput from '../TextInput'

import ListTrash from './ListTrash'

import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteList, editList } from '../../redux/actions/todoListActions'
import { Link } from 'react-router-dom'

function ListTodo({ id }) {

  const dispatch = useDispatch();

  const [titleList, setTitleList] = useState('');

  const handleInputText = useCallback((event) => {
    setTitleList(event.target.value);
  }, []);

  const handleDeleteList = useCallback(() => {
    dispatch(deleteList(id));
  }, []);

  const handleKeyEnter = useCallback((event) => {
    //
  }, []);

  useEffect(() => {
    dispatch(editList(id, titleList));
  }, [titleList]);

  return (
    <div className="list">
      <ListTrash handleAction={handleDeleteList} />

      <TextareaInput 
        handleInput={handleInputText}
        handleKeyEnter={handleKeyEnter}
        text={titleList}
      />

      <Link to={"/lists/" + id} className="hover:text-primary">
        <CaretRight size={32} weight="regular" />
      </Link>
    </div>
  )
}

export default ListTodo