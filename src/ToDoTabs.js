import React from 'react'

const ToDoTabs = ({ todoFilter }) => {
  return (
    <div className="ui buttons tabs">
      <button className="ui button blue" onClick={() => todoFilter('all')}>Все</button>
      <button className="ui button" onClick={() => todoFilter(true)}>Активные</button>
      <button className="ui button" onClick={() => todoFilter(false)}>Завершенные</button>
    </div>
  )
}

export default ToDoTabs;
