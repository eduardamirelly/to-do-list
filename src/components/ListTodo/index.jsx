import { CaretRight } from 'phosphor-react'
import TextareaInput from '../TextInput'

import ListTrash from './ListTrash'

import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addList, deleteList, editList } from '../../redux/actions/todoListActions'
import { Link } from 'react-router-dom'

function ListTodo({ id, title }) {

  const dispatch = useDispatch();

  const [titleList, setTitleList] = useState(title);

  const handleInputText = useCallback((event) => {
    setTitleList(event.target.value);
    dispatch(editList(id, event.target.value));
  }, [dispatch, titleList]);

  const handleDeleteList = useCallback(() => {
    dispatch(deleteList(id));
  }, []);

  const handleKeyEnter = useCallback((event) => {
    if(event.keyCode === 13) {
      dispatch(addList());
    }
    else if(event.keyCode === 8 && titleList.length === 0) {
      dispatch(deleteList(id));
    }
  }, [dispatch, titleList]);

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