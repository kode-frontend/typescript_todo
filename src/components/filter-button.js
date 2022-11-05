import classnames from 'classnames'

export const FilterButton = ({ filter, onClick, isActive }) => {
  return (
    <button
      onClick={() => onClick(filter)}
      className={classnames({ active: isActive })}
    >
      {filter}
    </button>
  )
}
