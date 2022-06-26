import Button from '../Button'
import { PlusCircle } from 'phosphor-react'

function ButtonAddList() {
  return (
    <>
      <Button icon={<PlusCircle size={24} weight="regular" />} text="Add new List" />
    </>
  )
}

export default ButtonAddList