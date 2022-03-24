import React from 'react'

const ToDoItem = ({ todo }) => {
  <div className="todo" key={todo.id}>
    <label className="checkbox">
      <input type="checkbox" />
      <div className="checkbox-icon"></div>
    </label>
    <span className="text">{todo.task}</span>
    <button className="negative ui button">Удалить</button>
    <button className="circular ui icon button button-edit">
      <i className="icon cog"></i>
    </button>
  </div>
}

export default ToDoItem;
