export const saveTasks = (tasks) => {
    localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
  };
  
  export const loadTasks = () => {
    const savedTasks = localStorage.getItem("kanban-tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };
  