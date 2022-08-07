import Button from '..'
import { PlusCircle } from 'phosphor-react'

import { useDispatch } from 'react-redux'
import { addList } from '../../../redux/actions/todoListActions';
import { useCallback } from 'react';

function ButtonAddList() {

  const dispatch = useDispatch();

  const handleAddNewList = useCallback(() => {
    dispatch(addList());
  }, []);

  return (
    <>
      <Button icon={<PlusCircle size={24} weight="regular" />} text="Add new List" handleAction={handleAddNewList} />
    </>
  )
}

export default ButtonAddList