import { useContext } from 'react'

import { Context } from '../store/store'
import { TodoTextInput } from "./todo-text-input"

export const Header = () => {
  const { dispatch } = useContext(Context)

  const onSave = (text) => {
    dispatch({ type: 'ADD_TODO', payload: { text }})
  }

  return (
    <header>
      <h1>Todober</h1>
      <TodoTextInput
        isNewItem
        onSave={onSave}
      />
    </header>
  )
}