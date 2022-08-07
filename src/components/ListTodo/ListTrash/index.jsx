import { Trash } from 'phosphor-react'
import React, { useState } from 'react'

function ListTrash({handleAction}) {

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div onClick={handleAction} className="option-trash" 
      onMouseEnter={() => { setIsHovering(true) }}
      onMouseLeave={() => {setIsHovering(false) }}
    >
      { isHovering ?
 
        <span className="opacity-100">
          <Trash size={32} weight="regular" />
        </span>

      : 
        <span className="opacity-0 invisible">
          <Trash size={32} weight="regular" />
        </span>
      }
    </div>
  )
}

export default ListTrash