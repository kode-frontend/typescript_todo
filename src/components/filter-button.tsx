import classnames from 'classnames'
import { Filter } from '../types'

type FilterButtonProps = {
  filter: Filter
  onClick: (filter: Filter) => void
  isActive: boolean
}

export const FilterButton = ({
  filter,
  onClick,
  isActive,
}: FilterButtonProps) => {
  return (
    <button
      onClick={() => onClick(filter)}
      className={classnames({ active: isActive })}
    >
      {filter}
    </button>
  )
}
