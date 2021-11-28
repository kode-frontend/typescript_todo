import { TodoItem } from './todo-item'

export const TodoList = ({ data }) => {
  return (
    <ul className={'todo-list'}>
      {data.map((item) => <TodoItem task={item} key={item.id} />)}
    </ul>
  )
}
