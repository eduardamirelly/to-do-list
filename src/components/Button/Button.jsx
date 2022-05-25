import React from 'react'

function Button(props) {
  return (
    <div className="btn">
      { props.icon }
      <p>{ props.text }</p>
    </div>
  )
}

export default Button