import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "@/pages/HomeHomework";
// import Login from "./pages/loginClass";
// import LoginHomeWork from "@/pages/LoginHomeWork";
import { UserContext } from "@/context/UserContext";
import Foo from "./components/Foo";
import NotFound from "@/pages/NotFound";
import { useReducer, useState } from "react";
// import AboutUs from "./pages/AbourUs";
// import Article from "./pages/Article";

const defaultUser = { name: "jay", age: 32 };
const userReducer = (state, action) => {
  switch (action.type) {
    case "addUser":
      return { ...state, name: action.value };
    case "addanotherUser":
      return { ...state, name: action.value };
  }
  return state;
};
const App = () => {
  const [user, dispatch] = useReducer(userReducer, defaultUser);

  return (
    <>
      <UserContext.Provider value={{ user, dispatch }}>
        <Foo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App;
