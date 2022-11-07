import { Todo } from '../types'

export const generateTaskId = (todos: Todo[]) => {
  return (
    todos.reduce((acc, cur) => {
      return cur.id > acc ? cur.id : acc
    }, 0) + 1
  )
}
