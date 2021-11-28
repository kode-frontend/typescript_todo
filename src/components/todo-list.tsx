import { TodoItem } from './todo-item'
import type { Task } from '../types'

type Props = {
  data: Task[]
}

export const TodoList: React.FC<Props> = ({ data }) => {
  return (
    <ul className={'todo-list'}>
      {data.map((item) => <TodoItem task={item} key={item.id} />)}
    </ul>
  )
}
