
import PropTypes from "prop-types"; 
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

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  moveTask: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  currentStatus: PropTypes.string.isRequired,
};

export default Task;
