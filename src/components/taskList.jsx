import { tasks as Data } from "../resources/tasks";
import { useState, useEffect } from "react";

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
          <h2 >{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
