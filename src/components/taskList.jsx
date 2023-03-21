import "../styles/task.css";

export default function TaskList(props) {
  
  if (props.tasks.length === 0) {
    return <h1>There are no tasks yet</h1>
  }
  return (
    <div>
      {props.tasks.map((task, index) => (
        <div key={index}>
          <h2 className="task-title">{task.title}</h2>
          <p className="task-description">{task.description}</p>
        </div>
      ))}
    </div>
  );
}
