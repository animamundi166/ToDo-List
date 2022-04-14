import { useState } from "react";

const ToDoInput = ({ addTodo, t }) => {

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    addTodo(text);
    setText("");
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <div>
      <div className="ui action input">
        <input
          className="mainInput"
          type="text"
          placeholder={t("placeholder")}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={text}
        />
        <button
          className="ui button addButton"
          onClick={handleSubmit}
        >
          {t("add")}
        </button>
      </div>
    </div>
  )
}

export default ToDoInput;
