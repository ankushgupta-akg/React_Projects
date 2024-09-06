import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <div class='items-container'>
      <AppTodo></AppTodo>
     
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
      </div>
    </center>
  );

  // <center class='todo-container'>
  //     <H1>TODO APP</H1>
  //     <div class="container text-center">
  //       <div class="row">
  //         <div class="col-8">col-8</div>
  //         <div class="col-4">col-4</div>
  //       </div>
  //     </div>
  //   </center>
}

export default App;
