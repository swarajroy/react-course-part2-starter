export interface Task {
  id: number;
  title: string;
}

interface AddAction {
  task: Task;
  type: "ADD";
}

interface DeleteAction {
  taskId: number;
  type: "DELETE";
}

export type TaskAction = AddAction | DeleteAction;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
  return [];
};

export default tasksReducer;
