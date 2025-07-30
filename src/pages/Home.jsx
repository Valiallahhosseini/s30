import { useReducer } from "react";

import { counterReducer } from "@/reducers/counterReducer";
import IndexCalender from "@/components/layout/header/IndexCalender";
const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <div>Current :{count}</div>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <button onClick={() => dispatch({ type: "remove" })}>remove</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default Home;
