import { Trash } from 'phosphor-react'
import React from 'react'

function TrashButton({handleAction}) {
  return (
    <>
      <button onClick={handleAction} type="button" className="text-second-200 hover:text-primary rounded-full hover:bg-dark-900 p-3">
        <Trash size={24} weigrht="regular"  />
      </button>
    </>
  )
}

export default TrashButton