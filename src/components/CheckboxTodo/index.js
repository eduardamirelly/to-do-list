export function autoResize(textarea) {
  console.log(textarea)
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}