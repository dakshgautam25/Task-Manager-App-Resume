import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <div
      className={`flex justify-between items-center p-2 border mb-2 rounded ${
        task.completed ? "line-through text-gray-400" : ""
      }`}
    >
      <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;