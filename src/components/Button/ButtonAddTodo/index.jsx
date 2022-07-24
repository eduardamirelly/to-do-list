import Button from '..'
import CheckPlus from '../../icons/CheckPlus'

import { useDispatch } from 'react-redux'
import { addTodo } from '../../../redux/actions/todoActions';

function ButtonAddTodo() {

  const dispatch = useDispatch();

  function handleAddNewTodo() {
    dispatch(addTodo());
  }

  return (
    <>
      <Button icon={<CheckPlus />} text="Add to-do" handleAction={handleAddNewTodo}/>
    </>
  )
}

export default ButtonAddTodo