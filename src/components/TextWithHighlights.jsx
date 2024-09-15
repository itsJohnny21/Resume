const TextWithHighlights = ({ className, text, keywords }) => {
  const highlightText = (text, keywords) => {
    if (!keywords || keywords.length === 0) return text

    const pattern = new RegExp(`(${keywords.join('|')})(?![a-zA-Z])`, 'gi')
    const parts = text.split(pattern)

    return parts.map((part, index) =>
      keywords.map((kw) => kw.toLowerCase()).includes(part.toLowerCase()) ? (
        <b key={index}>{part}</b>
      ) : (
        part
      )
    )
  }

  return <p className={className}>{highlightText(text, keywords)}</p>
}

export default TextWithHighlights
