import { useContext, useMemo } from 'react'

import { Context } from '../store/store'
import { FilterButton } from './filter-button'
import { Filters } from '../types'

const FILTER_TITLES = ["All", "Active", "Completed"] as Filters[]

type Props = {
  visibilityFilter: Filters,
  setVisibilityFilter: (filter: Filters) => void
}

export const Footer: React.FC<Props> = ({ visibilityFilter, setVisibilityFilter }) => {
  const { state } = useContext(Context)

  const todoTaskCount = useMemo(() => {
    return state.todos.filter((task) => !task.isCompleted).length
  }, [state])

  const onFilterChange = (filter: Filters) => {
    console.log(filter)
    setVisibilityFilter(filter)
  }

  return (
    <footer>
      <div className='footer-wrapper'>
        {Boolean(todoTaskCount) ? (<p>Осталось задач: {todoTaskCount}</p>) : (<p>Все задачи выполнены</p>)}
        <ul className='filters-list'>
          {FILTER_TITLES.map((filter) => (
            <li key={filter}>
              <FilterButton filter={filter} onClick={onFilterChange} isActive={visibilityFilter === filter} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}