import { CaretRight } from 'phosphor-react'

import ListTrash from './ListTrash'

function ListTodo(props) {
  return (
    <div className="list">
      <ListTrash />
      
      { props.title }
      <CaretRight size={32} weight="regular" />
    </div>
  )
}

export default ListTodo