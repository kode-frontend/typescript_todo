export const FilterButton = ({ filter, onClick, isActive }) => {
  return (
    <button onClick={() => onClick(filter)} className={isActive ? 'active' : ''} >{filter}</button>
  )
}