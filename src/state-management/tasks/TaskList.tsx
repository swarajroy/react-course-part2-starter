import useAuthStore from "../auth/store";
import useTasksStore from "./store";

const TaskList = () => {
  const { tasks, add, remove } = useTasksStore();
  const { username } = useAuthStore();

  return (
    <>
      <p>User: {username}</p>
      <button
        onClick={() =>
          //setTasks([{ id: Date.now(), title: "Task " + Date.now() }, ...tasks])
          add({ id: Date.now(), title: "Task " + Date.now() })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                //setTasks(tasks.filter((t) => t.id !== task.id))
                remove(task.id)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
