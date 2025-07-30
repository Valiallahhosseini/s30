import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

export const useDelete = () => {
  const { dispatch } = useContext(UserContext);
  const { participants, dispatchParticipant } = useContext(UserContext);
  console.log("after Delete", participants);

  const onDelete = (phonenumber) => {
    dispatchParticipant({
      type: "removeparticipant",
      value: participants.filter((item) => {
        return item.phonenumber !== phonenumber;
      }),
    });
    dispatch({ type: "default", value: "idle" });
  };
  console.log("after Delete", participants);

  return { onDelete };
};
