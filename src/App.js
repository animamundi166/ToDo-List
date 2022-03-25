import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import ToDoInput from './ToDoInput';
import ToDoItem from './ToDoItem';

const App = () => {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const addTodo = (text) => {
    if (text) {
      const newToDo = {
        id: nanoid(),
        task: text,
        done: false,
      }
      setTodos([newToDo, ...todos]);
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

  // const todoFilter = (status) => {
  //   if (status === 'all') {
  //     setTodos(todos);
  //   } else {
  //     const newTodos = todos.filter(todo => todo.id === status);
  //     setTodos(newTodos);
  //   }
  // }


  return (
    <>
      <div className="container">
        <h1>TODO LIST</h1>
        <div className="ui divider"></div>
        <ToDoInput addTodo={addTodo} />
      </div>

      {todos.length > 0 &&

        <div id="container" className="container">
          {/* <div className="ui buttons tabs">
          <button className="ui button blue" onClick={() => todoFilter('all')}>Все</button>
          <button className="ui button" onClick={() => todoFilter(true)}>Активные</button>
          <button className="ui button" onClick={() => todoFilter(false)}>Завершенные</button>
        </div> */}
          {/* <div className="ui divider"></div>
        <div className="ui icon input search-input">
          <input className="searchInput" type="text" placeholder="Поиск" />
          <i className="inverted circular search icon"></i>
        </div> */}

          <div className="list">
            {todos.map((todo) => (
              <ToDoItem
                todo={todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
              />
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default App;
