import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>

      <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-3">
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
      </div>
    </div>
  );
};

export default TodoContainer;
