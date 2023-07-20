import React, {useEffect} from 'react'

const Editor = ({textareaInput, setTextareaInput}) => {

  useEffect(() => {
    const savedInput = localStorage.getItem("textareaInput", textareaInput);
    if (savedInput) setTextareaInput(savedInput);
  }, [textareaInput, setTextareaInput]);


  return (
    <div className="editor-layout">
      <div className="toolbar">
        <p className="title">Editor</p>
      </div>
        <textarea 
          id="editor"
          type="text"
          name="text"
          value={textareaInput}
          onChange={(event) => {
            setTextareaInput(event.target.value);
            localStorage.setItem("textareaInput", event.target.value);
          }}
          placeholder="Enter text to convert to markdown.."
          autoFocus 
        />
     </div>
  )
}

export default Editor