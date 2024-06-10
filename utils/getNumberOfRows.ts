export default (targetEl) => {
  const clone = targetEl.cloneNode(true)

  // Set styles to make the clone hidden but keep its dimensions
  clone.style.visibility = 'hidden'
  clone.style.position = 'absolute'
  clone.style.height = 'auto'
  clone.style.width = targetEl.clientWidth + 'px'
  clone.style.whiteSpace = 'nowrap' // Force text in a single line

  document.body.appendChild(clone)
  const singleLineHeight = clone.clientHeight
  document.body.removeChild(clone)

  const totalHeight = targetEl.clientHeight
  const numberOfRows = Math.round(totalHeight / singleLineHeight)

  return numberOfRows
}
