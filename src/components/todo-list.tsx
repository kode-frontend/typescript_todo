import { Todo } from '../types'
import { TodoItem } from './todo-item'

type TodoListProps = {
  data: Todo[]
}

export const TodoList = ({ data }: TodoListProps) => {
  return (
    <ul className="todo-list">
      {data.map((item) => (
        <TodoItem task={item} key={item.id} />
      ))}
    </ul>
  )
}
