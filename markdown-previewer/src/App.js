import React, { useState } from 'react'
import './styles/sass/style.scss'

import Editor from './components/Editor'
import Preview from './components/Preview'

const App = () => {

  const [textareaInput, setTextareaInput] = useState("");


  return (
    <div className="app">
        <Editor 
        textareaInput={textareaInput}
        setTextareaInput={setTextareaInput}
        />
        <Preview textareaInput={textareaInput}/>
    </div>
  )
}

export default App