export const TodoItemView = ({ task, onDelete, toggleComplete, onDoubleClick }) => {
  return (
    <div className="todo-item-view-wrapper">
      <input type='checkbox' onChange={() => toggleComplete(task.id)} checked={task.isCompleted} />
      <label onDoubleClick={onDoubleClick}>{task.text}</label>
      <button onClick={() => onDelete(task.id)}>x</button>
    </div>
  )
}