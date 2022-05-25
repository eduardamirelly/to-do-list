import React from 'react'

function Button(props) {
  return (
    <div className="btn">
      { props.icon }
      { props.text }
    </div>
  )
}

export default Button