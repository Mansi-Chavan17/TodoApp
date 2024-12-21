const Task = ({ task, moveTask, handleDelete, currentStatus }) => {
  return (
    <div className="task-card" data-testid={`task-${task.id}`}>
      <p>{task.title}</p>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
      <div>
        {currentStatus !== "To Do" && (
          <button onClick={() => moveTask(task.id, "To Do")}>Move to To Do</button>
        )}
        {currentStatus !== "In Progress" && (
          <button onClick={() => moveTask(task.id, "In Progress")}>Move to In Progress</button>
        )}
        {currentStatus !== "Done" && (
          <button onClick={() => moveTask(task.id, "Done")}>Move to Done</button>
        )}
      </div>
    </div>
  );
};

export default Task;
