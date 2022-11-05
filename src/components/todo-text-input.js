import { useState } from 'react'

const keyboardEnterKey = 'Enter'

export const TodoTextInput = ({ text, isNewItem, onSave }) => {
  const [inputText, setInputText] = useState(text || '')

  const onChangeHandler = (e) => {
    setInputText(e.target.value)
  }

  const onKeyDownHandler = (e) => {
    if (e.key === keyboardEnterKey && Boolean(inputText)) {
      onSave(inputText)
      setInputText('')
    }
  }

  const onBlurHandler = (e) => {
    if (!isNewItem) {
      console.log('blured')
      onSave(e.target.value)
    }
  }

  return (
    <div>
      <input
        className="text-input"
        type="text"
        autoFocus
        placeholder="Что нужно сделать?"
        value={inputText}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  )
}
