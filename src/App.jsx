import { useState } from "react";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  function addTask(title) {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !tasks.completed } : task
      )
    );
  }

  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed
  );
  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <AddTask onAddTask={addTask} />
      <FilterButtons onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} onToggleTask={toggleTask} />
    </div>
  );
}

export default App;
