import { useContext, useMemo } from 'react'

import { Context } from '../store/store'
import { Filter } from '../types'
import { FilterButton } from './filter-button'

const FILTER_TITLES: Filter[] = ['All', 'Active', 'Completed']

type FooterProps = {
  visibilityFilter: Filter
  onFilterChange: (filter: Filter) => void
}

export const Footer = ({ visibilityFilter, onFilterChange }: FooterProps) => {
  const { state } = useContext(Context)

  const todoTaskCount = useMemo(() => {
    return state.todos.filter((task) => !task.isCompleted).length
  }, [state])

  const onFilterChangeHandler = (filter: Filter) => {
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
