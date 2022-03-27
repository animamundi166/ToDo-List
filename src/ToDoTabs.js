import React, { useState } from 'react';

const ToDoTabs = ({ todoFilter }) => {

  const [blueClass, setBlueClass] = useState(1);

  return (
    <div className="ui buttons tabs">
      <button
        className={blueClass === 1 ? 'ui button blue' : 'ui button'}
        onClick={() => { todoFilter('all'); setBlueClass(1) }}
      >Все
      </button>
      <button
        className={blueClass === 2 ? 'ui button blue' : 'ui button'}
        onClick={() => { todoFilter(false); setBlueClass(2) }}
      >Активные
      </button>
      <button
        className={blueClass === 3 ? 'ui button blue' : 'ui button'}
        onClick={() => { todoFilter(true); setBlueClass(3) }}
      >Завершенные
      </button>
    </div>
  )
}

export default ToDoTabs;
