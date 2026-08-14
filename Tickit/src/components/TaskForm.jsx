const TaskForm = ({ text, setText, addTask }) => {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        className="border p-2"
      />

      <button
        onClick={addTask}
        className="bg-blue-500 p-2 text-white"
      >
        Add
      </button>
    </div>
  );
};

export default TaskForm;