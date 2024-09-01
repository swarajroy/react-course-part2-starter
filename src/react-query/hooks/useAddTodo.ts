import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import CACHE_KEY_TODOS from "../constants";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();
      return { previousTodos };
    },
    onSuccess: (savedTodo: Todo, newTodo: Todo) => {
      // APPROACH 1:
      //queryClient.invalidateQueries(CACHE_KEY_TODOS);
      // APPORACH 2:

      queryClient.setQueryData<Todo[]>(
        CACHE_KEY_TODOS,
        (todos) => todos?.map((todo) => (todo === newTodo ? savedTodo : todo)) // u do this because the savedTodo has the id of the backened so u'd replace that obj in the arr
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
