import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const Foo = () => {
  const { user, dispatch } = useContext(UserContext);

  const changeCustomer = () => {
    dispatch({ type: "addUser", value: "Reza" });
  };
  return (
    <>
      <div>Insied Foo component</div>
      <div>user: {user.name}</div>
      <div>Age: {user.age}</div>

      <button onClick={changeCustomer}>change User</button>
    </>
  );
};
export default Foo;
