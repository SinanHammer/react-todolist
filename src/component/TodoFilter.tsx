
function TodoFilter({setFilter}: any) {
  return (
    <div>
        <button onClick={() => setFilter('all')}>ALL</button>
        <button onClick={() => setFilter('active')}>ACTIVE</button>
        <button onClick={() => setFilter('completed')}>COMPLETED</button>
    </div>
  )
}

export default TodoFilter;
