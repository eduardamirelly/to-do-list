

function Button({ icon, text, handleAction }) {
  return (
    <>
      <button className="btn" onClick={handleAction}>
        { icon }
        { text }
      </button>
    </>
  )
}

export default Button