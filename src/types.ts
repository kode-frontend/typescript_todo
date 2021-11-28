export type Task = {
  id: number
  text: string
  isCompleted: boolean
}

export type Filters = 'All' | 'Active' | 'Completed'
