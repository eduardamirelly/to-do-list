import React from 'react'
import ButtonAddList from '../Button/Buttons/ButtonAddList'

function HeaderPage() {
  return (
    <>
      <header className="w-full flex sm:justify-between justify-center items-center flex-wrap pb-3 border-b-2 border-dark-700 border-opacity-80">
        <h1 className="title-header">
          To do | Your lists
        </h1>
        <ButtonAddList />
      </header>
    </>
  )
}

export default HeaderPage