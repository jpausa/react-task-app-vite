import { tasks as Data } from "../resources/tasks";
import { useState, useEffect } from "react";
import "../styles/task.css";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
 
  useEffect(() => {
    setTasks(Data)

  }, [])
  
  if (tasks.length === 0) {
    return <h1>There are no tasks yet</h1>
  }
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <h2 className="task-title">{task.title}</h2>
          <p className="task-description">{task.description}</p>
        </div>
      ))}
    </div>
  );
}
