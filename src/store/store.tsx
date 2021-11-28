import { createContext, useReducer, Dispatch } from "react"
import { Task } from '../types'

import { todoReducer } from './reducer'
import type { Action } from './reducer'

type State = {
  todos: Task[]
}

const initialState: State = {
  todos: [
    {
      id: 10,
      text: 'Сделать тестовое задание',
      isCompleted: true,
    },
    {
      id: 12,
      text: 'Прочитать карманную книгу TypeScript',
      isCompleted: false,
    },
    {
      id: 13,
      text: 'Сделать домашку по TypeScript',
      isCompleted: false,
    },
  ]
}

export const Context = createContext<{
  state: State,
  dispatch: Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null
})

const mainReducer = ({ todos }: State, action: Action): State => ({
  todos: todoReducer(todos, action)
})

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}
