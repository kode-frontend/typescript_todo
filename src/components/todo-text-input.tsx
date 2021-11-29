import { useState, ChangeEvent, KeyboardEvent, FocusEvent } from "react"

type Props = {
  isNewItem: boolean
  text?: string
  isEditing?: boolean,
  onSave: (text: string) => void
}

export const TodoTextInput: React.FC<Props> = ({
  text,
  isEditing = true,
  isNewItem,
  onSave,
}) => {
  const [inputText, setInpuText] = useState(text || '')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInpuText(e.target.value)
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && Boolean(inputText)) {
      onSave(inputText)
      setInpuText('')
    }
  }

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>): void => {
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