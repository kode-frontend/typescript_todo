import { useState, useContext } from 'react'

import { Context } from '../store/store'
import { TodoTextInput } from './todo-text-input'
import { TodoItemView } from './todo-item-view'

export const TodoItem = ({ task }) => {
  const { dispatch } = useContext(Context)
  const [isEditing, setIsEditing] = useState(false)

  const onSave = (text) => {
    dispatch({ type: 'EDIT_TODO', payload: { id: task.id, text } })
    setIsEditing(false)
  }
  const onDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } })
  }
  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: { id } })
  }
  const onDoubleClick = () => {
    setIsEditing(true)
  }

  return (
    <li className="todo-item-wrapper">
      {isEditing ? (
        <TodoTextInput isNewItem={false} text={task.text} onSave={onSave} />
      ) : (
        <TodoItemView
          task={task}
          onDelete={onDelete}
          toggleComplete={toggleComplete}
          onDoubleClick={onDoubleClick}
        />
      )}
    </li>
  )
}
