import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            value={todoName}
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input value={dueDate} type="date" onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            onClick={handleAddButtonClicked}
            className="btn btn-success kg-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
