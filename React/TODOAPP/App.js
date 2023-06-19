import { useState } from "react";
import "./styles.css";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const addTask = () => {
    setTodoList((list) => {
      return [
        ...list,
        { title: currentTask, completed: false, id: list.length }
      ];
    });
    setCurrentTask("");
  };
  const updateTodoList = (id) => {
    let updateTodoList = todoList.map((task) => {
      return task.id === id
        ? { ...task, completed: !task.completed }
        : { ...task };
    });
    setTodoList(updateTodoList);
  };
  return (
    <div className="todo-container">
      <h1>ToDo List</h1>
      <input
        onChange={(e) => setCurrentTask(e.currentTarget.value)}
        value={currentTask}
      />
      <button onClick={addTask}>Add Task</button>
      <div className="todo-list-container">
        <ul>
          {todoList.map((each) => {
            return (
              <div key={each.id}>
                <input
                  type="checkbox"
                  checked={each.completed}
                  onChange={(e) => updateTodoList(each.id)}
                />
                <span className={each.completed ? "strike" : ""}>
                  {each.title}
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
