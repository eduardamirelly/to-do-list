import Button from '..'
import CheckPlus from '../../icons/CheckPlus'

import { useDispatch } from 'react-redux'
import { addTodo } from '../../../redux/actions/todoListActions';
import { useCallback } from 'react';

function ButtonAddTodo() {

  const dispatch = useDispatch();

  const handleAddNewTodo = useCallback(() => {
    dispatch(addTodo());
  }, []);

  return (
    <>
      <Button icon={<CheckPlus />} text="Add to-do" handleAction={handleAddNewTodo}/>
    </>
  )
}

export default ButtonAddTodo