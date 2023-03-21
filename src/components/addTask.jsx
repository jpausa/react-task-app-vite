import React, { useState } from "react";

export default function AddTask({ createTask, tasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTaskHandler(event) {
    event.preventDefault();
    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      title: title,
      description: description,
    };
   createTask(newTask);
  }

  return (
    <>
      <form onSubmit={addTaskHandler}>
        <input
          type="text"
          placeholder="New task name..."
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="New task description..."
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
