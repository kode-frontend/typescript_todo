import { useState, useContext } from "react"

import { Context } from "../store/store"
import { TodoTextInput } from "./todo-text-input"
import { TodoItemView } from "./todo-item-view"
import { Task } from '../types'

type Props = { 
  task: Task
}

export const TodoItem: React.FC<Props> = ({ task }) => {
  const { dispatch } = useContext(Context)
  const [isEditing, setIsEditing] =  useState(false)


  const onSave = (text: string) => {
    dispatch({ type: 'EDIT_TODO', payload: { id: task.id, text }} )
    setIsEditing(false)
  }
  const onDelete = (id: number) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } })
  }
  const toggleComplete = (id: number) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: { id } })
  }
  const onDoubleClick = () => {
    setIsEditing(true)
  }

  return (
    <li>
      {isEditing ? (
        <TodoTextInput isNewItem={false} text={task.text} onSave={onSave} />
      ): (
        <TodoItemView task={task} onDelete={onDelete} toggleComplete={toggleComplete} onDoubleClick={onDoubleClick} />
      )}
    </li>
  )
}