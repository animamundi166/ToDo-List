import React, { useState } from 'react';

const ToDoTabs = ({ setTab }) => {

  const [blueClass, setBlueClass] = useState(1);

  return (
    <div className="ui buttons tabs">
      <button
        className={blueClass === 1 ? 'ui button blue' : 'ui button'}
        onClick={() => { setTab(0); setBlueClass(1) }}
      >
        Все
      </button>
      <button
        className={blueClass === 2 ? 'ui button blue' : 'ui button'}
        onClick={() => { setTab(1); setBlueClass(2) }}
      >
        Активные
      </button>
      <button
        className={blueClass === 3 ? 'ui button blue' : 'ui button'}
        onClick={() => { setTab(2); setBlueClass(3) }}
      >
        Завершенные
      </button>
    </div>
  )
}

export default ToDoTabs;
