function TextareaInput({ handleInput, handleKeyEnter, text }) {
  return (
    <>
      <textarea
        onInput={handleInput}
        onKeyDown={handleKeyEnter}
        value={text}
        rows="1"
        autoFocus
      >
      </textarea>
    </>
  )
}

export default TextareaInput