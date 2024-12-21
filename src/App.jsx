import { useState, useEffect } from "react";
import Task from "./Task";
import { saveTasks, loadTasks } from "./localStorage";
import './styles.css'

const App = () => {
  const initialTasks =
    loadTasks() || [
      { id: "task-1", title: "Set up project structure", status: "To Do" },
      { id: "task-2", title: "Design Kanban layout", status: "In Progress" },
      { id: "task-3", title: "Implement drag-and-drop", status: "In Progress" },
      { id: "task-4", title: "Test functionality", status: "Done" },
    ];

  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState(""); 
  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const newTask = {
        id: `task-${Date.now()}`,
        title: newTaskTitle,
        status: "To Do",
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskTitle("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const moveTask = (id, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <div className="kanban-board">
      <h1>Kanban Task Management System</h1>
      <div>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="columns">
        {["To Do", "In Progress", "Done"].map((status) => (
          <div className="column" key={status}>
            <h3>{status}</h3>
            <div className="task-list">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    moveTask={moveTask}
                    handleDelete={handleDeleteTask}
                    currentStatus={status}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
