import { CaretRight } from 'phosphor-react'
import TextareaInput from '../TextInput'

import ListTrash from './ListTrash'

import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteList, editList } from '../../redux/actions/todoListActions'
import { Link } from 'react-router-dom'

function ListTodo({ id, title }) {

  const dispatch = useDispatch();

  const handleInputText = useCallback((event) => {
    dispatch(editList(id, event.target.value));
  }, []);

  const handleDeleteList = useCallback(() => {
    dispatch(deleteList(id));
  }, []);

  const handleKeyEnter = useCallback((event) => {
    //
  }, []);

  return (
    <div className="list">
      <ListTrash handleAction={handleDeleteList} />

      <TextareaInput 
        handleInput={handleInputText}
        handleKeyEnter={handleKeyEnter}
        text={title}
      />

      <Link to={"/lists/" + id} className="hover:text-primary">
        <CaretRight size={32} weight="regular" />
      </Link>
    </div>
  )
}

export default ListTodo