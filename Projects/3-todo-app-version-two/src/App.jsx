import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "complete react",
      dueDate: "4/10/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>

      <AppTodo></AppTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
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
