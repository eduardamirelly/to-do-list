import { DotsThreeVertical } from 'phosphor-react';
import React, { useState } from 'react'

function MenuOptions(props) {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuOptions = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <div className="menu-options" onClick={handleMenuOptions}>
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