import { generateTaskId } from '../utils/generateTaskId'
import { Task } from '../types'

const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export type Action =
 | { type: typeof ADD_TODO, payload: { text: string } }
 | { type: typeof EDIT_TODO, payload: { id: number, text: string } }
 | { type: typeof DELETE_TODO, payload: { id: number } }
 | { type: typeof TOGGLE_COMPLETED, payload: { id: number } }

export const todoReducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: generateTaskId(state), text: action.payload.text, isCompleted: false }]
    case EDIT_TODO:
      return [...state].map((task) => task.id === action.payload.id ? { ...task, text: action.payload.text } : task)
    case DELETE_TODO:
      return [...state].filter((task) => task.id !== action.payload.id)
    case TOGGLE_COMPLETED:
      return [...state].map((task) => task.id === action.payload.id ? { ...task, isCompleted: !task.isCompleted } : task)
    default:
      return state
  }
}