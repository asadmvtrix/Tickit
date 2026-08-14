import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text === "") return;

    const task = {
      id: tasks.length + 1,
      name: text,
      completed: false,
    };

    setTasks([...tasks, task]);
    setText("");
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const completeTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(newTasks);
  };

  return (
    <div className="p-5">
      <div>
        <Header />

        <TaskForm
          text={text}
          setText={setText}
          addTask={addTask}
        />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </div>
    </div>
  );
}

export default App;