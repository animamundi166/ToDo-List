import React, { useState } from 'react';

const ToDoTabs = ({ setTab, t }) => {

  const [blueClass, setBlueClass] = useState(1);

  return (
    <div className="ui buttons tabs">
      <button
        className={blueClass === 1 ? 'ui button blue' : 'ui button'}
        onClick={() => { setTab(0); setBlueClass(1) }}
      >
        {t("tab.all")}
      </button>
      <button
        className={blueClass === 2 ? 'ui button blue' : 'ui button'}
        onClick={() => { setTab(1); setBlueClass(2) }}
      >
        {t("tab.active")}
      </button>
      <button
        className={blueClass === 3 ? 'ui button blue' : 'ui button'}
        onClick={() => { setTab(2); setBlueClass(3) }}
      >
        {t("tab.completed")}
      </button>
    </div>
  )
}

export default ToDoTabs;
