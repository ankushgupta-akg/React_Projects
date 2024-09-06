import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    // {
    //   name: "Buy Milk",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Go to College",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "complete react",
    //   dueDate: "4/10/2024",
    // },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handelNewItem = (itemName, itemDueDate) => {
    console.log("ufyfyvvv");
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    // console.log(`deleted item ${todoItemName}`)

    const newTodoItems = todoItems.filter((item)=> item.name != todoItemName)
    setTodoItems(newTodoItems)

  }

  return (
    <center className="todo-container">
      <AppName></AppName>

      <AppTodo onNewItem={handelNewItem}></AppTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems}></TodoItems>
    </center>
  );

  // <center className='todo-container'>
  //     <H1>TODO APP</H1>
  //     <div className="container text-center">
  //       <div className="row">
  //         <div className="col-8">col-8</div>
  //         <div className="col-4">col-4</div>
  //       </div>
  //     </div>
  //   </center>
}

export default App;
