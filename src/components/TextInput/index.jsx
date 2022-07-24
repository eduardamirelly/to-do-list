function TextInput({ handleInput, handleKeyEnter, text }) {
  return (
    <>
      <input
        type="text"
        className="textarea-input"
        onInput={handleInput}
        onKeyDown={handleKeyEnter}
        value={text}
        autoFocus
      />
    </>
  )
}

export default TextInput