import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, completeTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;