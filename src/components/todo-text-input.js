import { useState } from "react"

export const TodoTextInput = ({
  text,
  isEditing = true, // влияет на отображение стилей
  isNewItem,
  onSave,
}) => {
  const [inputText, setInpuText] = useState(text || '')

  const onChangeHandler = (e) => {
    setInpuText(e.target.value)
  }

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13 && Boolean(inputText)) {
      onSave(inputText)
      setInpuText('')
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
        className={'text-input'}
        type='text'
        autoFocus
        placeholder='Что нужно сделать?'
        value={inputText}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  )
}