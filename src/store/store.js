import { createContext, useReducer } from "react"

import { todoReducer } from './reducer'

const initialState = {
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

const mainReducer = ({ todos }, action) => ({
  todos: todoReducer(todos, action)
})

export const Context = createContext({
  state: initialState,
  dispatch: () => null
})

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}