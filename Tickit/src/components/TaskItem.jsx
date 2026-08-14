const TaskItem = ({ task, deleteTask, completeTask }) => {
  return (
    <div className="border p-2 mt-2">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => completeTask(task.id)}
        />

        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.name}
        </span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;