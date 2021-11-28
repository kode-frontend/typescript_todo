import { useContext, useMemo } from "react"
import { Context } from "../store/store"

import { TodoList } from "./todo-list"
import { Filters } from '../types'

type Props = {
  visibilityFilter: Filters
}

export const MainSection: React.FC<Props> = ({ visibilityFilter }) => {
  const { state } = useContext(Context)

  const mappedTodos = useMemo(() => {
    switch (visibilityFilter) {
      case 'Active':
        return state.todos.filter((task) => !task.isCompleted)
      case 'Completed':
        return state.todos.filter((task) => task.isCompleted)
      default:
        return state.todos
    }
  }, [state, visibilityFilter])

  return (
    <TodoList
      data={mappedTodos}
    />
  )
}