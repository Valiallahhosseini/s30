import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/loginClass";
import LoginHomeWork from "@/pages/LoginHomeWork";
import NotFound from "@/pages/NotFound";
// import AboutUs from "./pages/AbourUs";
// import Article from "./pages/Article";

const App = () => {
  return (
    <>
      <p>Hi</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginHomeWork />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
