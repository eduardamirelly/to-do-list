import { ArrowCircleLeft } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ReturnButton() {
  return (
    <>
      <Link to="/" className="text-dark-600 hover:text-primary transition-colors">
        <ArrowCircleLeft size={42} weight="regular" />
      </Link>
    </>
  )
}

export default ReturnButton