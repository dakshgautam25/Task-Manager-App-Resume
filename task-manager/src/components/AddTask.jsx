import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task"
        className="border p-2 mr-2 flex-grow"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add
      </button>
    </form>
  );
};

export default AddTask;
