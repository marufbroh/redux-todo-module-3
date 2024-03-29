// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  //* From Local State
  // const { todos } = useAppSelector((state) => state.todos);

  //* From Server
  const { data: todos, isError, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {/* from local */}
          {/* {todos?.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))} */}

          {/* from server */}
          {todos?.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
