import Button from '../Button'
import { Trash } from 'phosphor-react'

function ButtonDeleteList() {
  return (
    <>
      <Button icon={<Trash size={24} weight="regular" />} text="Add new List" />
    </>
  )
}

export default ButtonDeleteList