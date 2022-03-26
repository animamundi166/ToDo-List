import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput';
import ToDoInput from './ToDoInput';
import ToDoItem from './ToDoItem';
import ToDoTabs from './ToDoTabs';

const App = () => {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filteredInputData, setFilteredInputData] = useState('');
  const [filteredData, setFilteredData] = useState(todos);

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

  const changeTodoText = (id, text) => {
    const copy = [...todos];
    const current = todos.find(todo => todo.id === id);
    current.task = text;
    setTodos(copy);
  }

  const todoFilter = (status) => {
    if (status === 'all') {
      setFilteredData(todos);
    } else {
      const newTodos = todos.filter(todo => todo.done === status);
      setFilteredData(newTodos);
    }
  }

  const inputFilter = (e) => {
    setFilteredInputData(e.target.value);
  }
  console.log(todos);


  return (
    <>
      <div className="container">
        <h1>TODO LIST</h1>
        <ToDoInput addTodo={addTodo} />
      </div>

      {todos.length > 0 &&
        <div id="container" className="container">
          {/* <ToDoTabs todoFilter={todoFilter} /> */}
          {/* <div className="ui divider"></div> */}
          <SearchInput inputFilter={inputFilter} />
          <div className="list">
            {todos
              .filter((todo) => todo.task.toLowerCase().includes(filteredInputData.toLowerCase()))
              .map((todo) => (
                <ToDoItem
                  todo={todo}
                  key={todo.id}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}
                  changeTodoText={changeTodoText}
                />
              ))}
          </div>
        </div>
      }
    </>
  )
}

export default App;
