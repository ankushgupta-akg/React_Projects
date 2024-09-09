import { useState, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function AddTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  // const noOfUpdatesElement = useRef(0)

  const todoNameElement = useRef()

  const dueDateElement = useRef()

  const contextObj = useContext(TodoItemsContext)
  const addNewItem = contextObj.addNewItem

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // setDueDate("");
    // setTodoName("");
    // // console.log(event)
    // noOfUpdates.current += 1;
    // console.log(noOfUpdates.current)

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value="";

    
  };

  return (
    <div className="container text-center">
      <form className="row kg-row"
      onSubmit={handleAddButtonClicked}
      >
        <div className="col-6">
          <input
          ref={todoNameElement}
            // value={todoName}
            type="text"
            placeholder="Enter Todo Here"
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input 
          // value={dueDate}
          ref={dueDateElement}

           type="date" 
          //  onChange={handleDateChange} 
           />
        </div>
        <div className="col-2">
          <button
           
            
            className="btn btn-success kg-button"
          >
           <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
