import { Filters } from '../types'

type Props = {
  filter: Filters,
  isActive: boolean
  onClick: (filter: Filters) => void
}

export const FilterButton: React.FC<Props> = ({ filter, onClick, isActive }) => {
  return (
    <button onClick={() => onClick(filter)} className={isActive ? 'active' : ''} >{filter}</button>
  )
}