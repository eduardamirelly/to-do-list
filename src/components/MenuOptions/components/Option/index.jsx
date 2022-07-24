function Option({ icon, text, handleAction }) {
  return (
    <div className="option" onClick={handleAction}>
      { icon }
      { text }
    </div>
  )
}

export default Option