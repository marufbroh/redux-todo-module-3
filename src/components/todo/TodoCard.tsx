const TodoCard = () => {
  return (
    <div className="bg-white p-3 rounded-md flex justify-between items-center">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="flex gap-5">
        <button>del</button>
        <button>edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
