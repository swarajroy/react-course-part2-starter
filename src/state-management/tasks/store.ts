import { create } from "zustand";

interface Task {
  id: number;
  title: string;
}

interface TasksStore {
  tasks: Task[];
  add: (newTask: Task) => void;
  remove: (id: number) => void;
}

const useTasksStore = create<TasksStore>((set) => {
  return {
    tasks: [],
    add: (newTask: Task) =>
      set((store) => ({ tasks: [newTask, ...store.tasks] })),
    remove: (id: number) =>
      set((store) => ({ tasks: store.tasks.filter((t) => t.id !== id) })),
  };
});

export default useTasksStore;
