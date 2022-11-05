import { useContext, useMemo } from 'react'

import { Context } from '../store/store'
import { FilterButton } from './filter-button'

const FILTER_TITLES = ['All', 'Active', 'Completed']

export const Footer = ({ visibilityFilter, onFilterChange }) => {
  const { state } = useContext(Context)

  const todoTaskCount = useMemo(() => {
    return state.todos.filter((task) => !task.isCompleted).length
  }, [state])

  const onFilterChangeHandler = (filter) => {
    console.log(filter)
    onFilterChange(filter)
  }

  return (
    <footer>
      <div className="footer-wrapper">
        {Boolean(todoTaskCount) ? (
          <p>Осталось задач: {todoTaskCount}</p>
        ) : (
          <p>Все задачи выполнены</p>
        )}
        <ul className="filters-list">
          {FILTER_TITLES.map((filter) => (
            <li key={filter}>
              <FilterButton
                filter={filter}
                onClick={onFilterChangeHandler}
                isActive={visibilityFilter === filter}
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
