export const TodoItemView = ({ task, onDelete, toggleComplete, onDoubleClick }) => {
  return (
    <div className="todo-item-view-wrapper">
      <input type='checkbox' onChange={() => toggleComplete(task.id)} checked={task.isCompleted} />
      <p onDoubleClick={onDoubleClick}>{task.text}</p>
      <button onClick={() => onDelete(task.id)}>X</button>
    </div>
  )
}