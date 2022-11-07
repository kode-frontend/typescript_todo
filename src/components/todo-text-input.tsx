import React, { useState } from 'react'

const keyboardEnterKey = 'Enter'

type TodoTextInputProps = {
  text?: string
  isNewItem: boolean
  onSave: (text: string) => void
}

export const TodoTextInput = ({
  text,
  isNewItem,
  onSave,
}: TodoTextInputProps) => {
  const [inputText, setInputText] = useState(text || '')

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === keyboardEnterKey && Boolean(inputText)) {
      onSave(inputText)
      setInputText('')
    }
  }

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
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
