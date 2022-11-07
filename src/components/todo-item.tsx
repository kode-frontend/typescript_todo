import { useState, useContext } from 'react'

import { Context } from '../store/store'
import { TodoTextInput } from './todo-text-input'
import { TodoItemView } from './todo-item-view'
import { Todo } from '../types'

type TodoItemProps = {
  task: Todo
}

export const TodoItem = ({ task }: TodoItemProps) => {
  const { dispatch } = useContext(Context)
  const [isEditing, setIsEditing] = useState(false)

  const onSave = (text: string) => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        text,
      },
    })
  }
  const onDelete = (id: number) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: {
        id,
      },
    })
  }

  const toggleComplete = (id: number) => {
    // dispatch({
    //   type: 'TOGGLE_COMPLETED',
    //   payload: {
    //     id,
    //   },
    // })
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
