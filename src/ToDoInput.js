const ToDoInput = () => {


  return (
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
    </div>)
}

export default ToDoInput;
