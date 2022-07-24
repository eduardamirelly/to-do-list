import { DotsThreeVertical } from 'phosphor-react';
import React, { useState } from 'react'

function MenuOptions(props) {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="menu-options" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
      <DotsThreeVertical size={24} weight="regular" />

      { isOpenMenu ? 
        <div className="menu-toggle">
          { props.children }
        </div>
      : ''}
      
    </div>
  )
}

export default MenuOptions