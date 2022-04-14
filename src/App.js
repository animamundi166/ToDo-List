import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { nanoid } from 'nanoid';
import SearchInput from './SearchInput';
import ToDoInput from './ToDoInput';
import ToDoItem from './ToDoItem';
import ToDoTabs from './ToDoTabs';

const App = () => {
  const { t, i18n } = useTranslation();
  const [langBtn, setlangBtn] = useState(false);
  const [langs, setLangs] = useState(['en', 'ru']);

  const toggleLanguage = () => {
    setlangBtn(!langBtn);
    setLangs(langs.reverse());
    i18n.changeLanguage(langs[0]);
  }

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filteredInputData, setFilteredInputData] = useState('');
  const [tab, setTab] = useState(0);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const setFilterTab = (tab, todos) => {
    if (tab === 0) {
      return todos;
    } else if (tab === 1) {
      return todos.filter(todo => !todo.done)
    } else if (tab === 2) {
      return todos.filter(todo => todo.done)
    }
  }

  const sortedTodos = setFilterTab(tab, todos);

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
    const filteredToDos = todos.filter(todo => todo.id !== id);
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

  const inputFilter = (e) => {
    setFilteredInputData(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="flex">
          <h1>{t("title")}</h1>
          <button className="ui grey basic button mini circular" onClick={toggleLanguage}>{langBtn ? 'EN' : "RU"}</button>
        </div>
        <ToDoInput addTodo={addTodo} t={t} />
      </div>

      {todos.length > 0 &&
        <div id="container" className="container">
          <ToDoTabs setTab={setTab} t={t} />
          <div className="ui divider" />
          <SearchInput inputFilter={inputFilter} t={t} />
          <div className="list">
            {sortedTodos
              .filter((todo) => todo.task.toLowerCase().includes(filteredInputData.toLowerCase()))
              .map((todo) => (
                <ToDoItem
                  todo={todo}
                  key={todo.id}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}
                  changeTodoText={changeTodoText}
                  t={t}
                />
              ))}
          </div>
        </div>
      }
    </>
  )
}

export default App;
