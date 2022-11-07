import { generateTaskId } from '../utils/generateTaskId'
import { Store } from './types'

// 1. Типизировать наш стор, чтобы редьюсер нам подсказывал, что мы забыли, упустили, сделали не так
// 2. Определить, какие у нас экшены бывают
// 3. Жестко типизировать экшены. Для такого типа экшена у нас соответствует такой-то payload

type ToDoActionType =
  | 'ADD_TODO'
  | 'EDIT_TODO'
  | 'DELETE_TODO'
  | 'TOGGLE_COMPLETED'

type Action<Type extends ToDoActionType, Payload> = {
  type: Type
  payload: Payload
}

type AddTodoAction = Action<
  'ADD_TODO',
  {
    text: string
  }
>

type EditTodoAction = Action<
  'EDIT_TODO',
  {
    text: string
    id: number
  }
>

type DeleteTodoAction = Action<
  'DELETE_TODO',
  {
    id: number
  }
>

type ToggleCompletedAction = Action<
  'TOGGLE_COMPLETED',
  {
    id: number
  }
>

export type ComposedAction =
  | AddTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | ToggleCompletedAction

type State = Store['todos']

export const todoReducer = (state: State, action: ComposedAction): State => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: generateTaskId(state),
          text: action.payload.text,
          isCompleted: false,
        },
      ]
    case 'EDIT_TODO':
      return [...state].map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task,
      )
    case 'DELETE_TODO':
      return [...state].filter((task) => task.id !== action.payload.id)
    case 'TOGGLE_COMPLETED':
      return [...state].map((task) =>
        task.id === action.payload.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      )
    default:
      return state
  }
}
