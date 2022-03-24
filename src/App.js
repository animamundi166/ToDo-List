import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import ToDoItem from './ToDoItem';

const App = () => {

  const [text, setText] = useState('');
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const addTodo = () => {
    if (text.trim() !== '') {
      const newToDo = {
        id: nanoid(),
        task: text,
        done: false,
      }
      setTodos([newToDo, ...todos]);
      setText('');
    }
    else {
      alert('Enter something');
      setText('');
    }
  }

  const removeTodo = (id) => {
    const filteredToDos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredToDos);
  }

  const toggleTodo = (id) => {
    const copy = [...todos];
    const current = todos.find(todo => todo.id === id);
    current.done = !current.done;
    setTodos(copy);
  }

  return (
    <>
      <div className="container">
        <h1>TODO LIST</h1>
        <div className="ui divider"></div>
        <div>
          <div className="ui action input">
            <input
              className="mainInput"
              type="text"
              placeholder="Введите название задачи..."
              onChange={e => setText(e.target.value)}
              value={text}
            />
            <button
              className="ui button addButton"
              onClick={addTodo}
            >
              Добавить
            </button>
          </div>
        </div>
      </div>


      <div id="container" className="container">
        <div className="ui buttons tabs">
          <button className="ui button blue">Все</button>
          <button className="ui button">Активные</button>
          <button className="ui button">Завершенные</button>
        </div>
        <div className="ui divider"></div>
        <div className="ui icon input search-input">
          <input className="searchInput" type="text" placeholder="Поиск" />
          <i className="inverted circular search icon"></i>
        </div>

        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
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
        ))}





        {/* <div className="todo--editable flex hidden">
            <div className="ui small input input-edit">
              <input type="text" value="Learn JS" placeholder="Введите новое название..." />
            </div>
            <button className="ui positive button small">Сохранить</button>
            <button className="ui button small">Отмена</button>
          </div> */}

        {/* <div className="todo todo--active" data-id="16fftU82">
            <label className="checkbox">
              <input checked type="checkbox" />
              <div className="checkbox-icon"></div>
            </label>
            <span className="text">Learn JS</span>
            <button className="negative ui button">Удалить</button>
          </div> */}

      </div>
    </>
  )
}

export default App;
