import React from 'react';
import cn from 'classnames';

const ToDoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div className={cn("todo", { "todo--active": todo.done })} key={todo.id}>
      <label className="checkbox">
        <input type="checkbox" onClick={() => toggleTodo(todo.id)} />
        <div className="checkbox-icon"></div>
      </label>
      <span className="text">{todo.task}</span>
      <button className="negative ui button" onClick={() => removeTodo(todo.id)}>Удалить</button>
      <button className="circular ui icon button button-edit">
        <i className="icon cog"></i>
      </button>
    </div>
  )
}

export default ToDoItem;
