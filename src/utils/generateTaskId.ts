import { Task } from '../types'

export const generateTaskId = (todos: Task[]): number => {
  return todos.reduce((acc, cur) => {
    return cur.id > acc ? cur.id : acc
  }, 0) + 1
}