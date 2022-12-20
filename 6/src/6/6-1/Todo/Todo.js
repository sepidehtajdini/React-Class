import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Todo() {
  const [tasks, setTask] = useState([]);
  const [removeCounter, setRemoveCounter] = useState(0);
  const [addCounter, setAddCounter] = useState(0);

  function removeTodo(selectedTask) {
    setTask(tasks.filter((allTasks) => selectedTask !== allTasks));
    setRemoveCounter(removeCounter + 1);
    setAddCounter(addCounter - 1);
  }
  function addTodo() {
    let newTask = prompt("Add new task");
    if (tasks.includes(newTask)) { alert("This task has been mentioned before") }
    else {
      setTask([...tasks, newTask]);
      setAddCounter(addCounter + 1);
    }
  }
  function removeAll() {
    const tedad = tasks.length;
    setTask([]);
    setRemoveCounter(removeCounter + tedad);
    setAddCounter(0);
  }
  return (
    <div>
      <Header removeCounter={removeCounter} addCounter={addCounter} tasks={tasks} addTodo={addTodo} removeAll={removeAll} />
      <Main removeCounter={removeCounter} addCounter={addCounter} tasks={tasks} removeTodo={removeTodo} />
      <hr />
    </div>
  )
}
export default Todo