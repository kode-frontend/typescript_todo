import { createContext, ReactNode, useReducer, Dispatch } from 'react'
import { Store } from './types'

import { todoReducer, ComposedAction } from './reducer'

const initialState: Store = {
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
  ],
}

const mainReducer = ({ todos }: Store, action: ComposedAction) => ({
  todos: todoReducer(todos, action),
})

export const Context = createContext<{
  state: Store
  dispatch: Dispatch<ComposedAction>
}>({
  state: initialState,
  dispatch: () => null,
})

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
