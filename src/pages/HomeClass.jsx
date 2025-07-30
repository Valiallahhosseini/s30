import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div>Insied Home page</div>
      <div>User: {user.name}</div>
      <div>Age: {user.age}</div>
    </>
  );
};

export default Home;
