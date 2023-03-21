import TaskList from "./components/taskList";
import AddTask from "./components/addTask";
import "./styles/general.css";
import { tasks as Data } from "./resources/tasks";
import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(Data);
  }, []);

  function refreshTaskList(task) {
    setTasks([...tasks, task]);
  }
  return (
    <>
      <h1 className="main-title">My Task List</h1>
      <AddTask createTask={refreshTaskList} tasks={tasks}/>
      <TaskList tasks={tasks} />
    </>
  );
}
