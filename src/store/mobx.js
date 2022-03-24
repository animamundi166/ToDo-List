import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { nanoid } from 'nanoid'
import TodoStore from './todo'

// оборачиваем компонент в observer для отслеживания изменений в сторе Mobx
const Todo = observer(() => {
  // создаем хух состояния для инпута
  const [text, setText] = useState('');

  return (
    <div>
      <input
        onChange={e => setText(e.target.value)}
        value={text}
        placeholder="Create"
      />

      <button
        onClick={() => TodoStore.createTodo({ id: nanoid(), title: text })}
      >
        ADD
      </button>
      {TodoStore.todos.map(({ id, title, completed }) => (
        <div
          key={id}
        >
          {/* Создаем CheckBox выполнения задачи и на onPress вешаем функцию выполнения задачи в сторе Mobx */}
          <input type="checkbox" value={completed} onValueChange={() => TodoStore.completeTodo(id)} />
          <span>{title}</span>
          {/* Создаем кнопку удаления задачи и на onPress вешаем функцию удаления задачи в сторе Mobx */}
          <button onClick={() => TodoStore.deleteTodo(id)}>Delete</button>
        </div>
      ))}
    </div>
  )
})

export default Todo;
