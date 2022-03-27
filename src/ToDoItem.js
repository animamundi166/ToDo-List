import React, { useState } from 'react';
import cn from 'classnames';

const ToDoItem = ({ todo, toggleTodo, removeTodo, changeTodoText }) => {

  const [changedText, setChangedText] = useState(todo.task);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setChangedText(e.target.value);
  }

  const editText = (id, text) => {
    changeTodoText(id, text);
    setIsEdit(false);
  }


  return (
    <div key={todo.id}>
      <div className={cn("todo", { "todo--active": todo.done })} >
        <label className="checkbox">
          <input type="checkbox" onClick={() => toggleTodo(todo.id)} defaultChecked={todo.done} />
          <div className="checkbox-icon"></div>
        </label>
        <span className="text">{todo.task}</span>
        <button className="negative ui button" onClick={() => removeTodo(todo.id)}>Удалить</button>
        <button className="circular ui icon button button-edit" onClick={() => setIsEdit(true)}>
          <i className="icon edit outline"></i>
        </button>
      </div>

      {isEdit && <div className="todo--editable flex">
        <div className="ui small input input-edit">
          <input type="text"
            value={changedText}
            placeholder="Введите новое название..."
            onChange={handleChange} />
        </div>
        <button className="ui positive button small" onClick={() => editText(todo.id, changedText)}>Сохранить</button>
        <button className="ui button small" onClick={() => setIsEdit(false)}>Отмена</button>
      </div>}
    </div>
  )
}

export default ToDoItem;
