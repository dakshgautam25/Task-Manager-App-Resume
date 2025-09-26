import { useContext } from "react";
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen p-8 ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
      <h1 className="text-3xl mb-4 font-bold">Task Manager</h1>
      <ThemeToggle />
      <AddTask />
      <TaskList />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Content />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;