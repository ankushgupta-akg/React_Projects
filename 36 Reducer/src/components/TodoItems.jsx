import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
const TodoItems = ({}) => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
