import { useContext, useState } from "react";
import { AppContext } from "../context/Context";

function Todo() {
  const { state, dispatch } = useContext(AppContext);
  const [inputVal, setInputVal] = useState("");
  const [searchTodo, setSearchTodo] = useState("");

  const addTodos = () => {
    dispatch({ type: "ADD_TODO", payload: inputVal });
    setInputVal("");
  };

  const deleteTodo = (index) => {
    dispatch({ type: "DELETE_TODO", payload: index });
  };

  return (
    <div className="flex flex-col justify-center items-center my-24">
      <div className="p-2">
        <input
          type="text"
          name="text"
          className="border-2 w-[400px] p-2"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={addTodos} className="px-3 border-2 p-2">
          Add todo
        </button>
      </div>

      <div className=" my-5 p-2 rounded-2xl flex justify-between">
        <input
          type="search"
          name="search"
          className="w-[300px] p-2 border-2"
          placeholder="Search your todos"
          value={searchTodo}
          onChange={(e) => setSearchTodo(e.target.value)}
        />
        <button
          onClick={() => dispatch({ type: "SEARCH_TODO", payload: searchTodo })}
        >
          Search
        </button>
      </div>

      <div>
        {state.todo.map((item, index) => {
          return (
            <div key={index} className="flex justify-between w-[500px] my-8">
              <div className="flex gap-3">
                <input type="checkbox" name="" id="" />
                <p>{item}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => deleteTodo(index)}>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
