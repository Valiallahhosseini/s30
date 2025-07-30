import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";
import { selectedUserContext } from "@/contexts/selectedUserContext";

export const useRandomSelector = () => {
  const { dispatch } = useContext(UserContext);
  const { participants } = useContext(UserContext);
  const { setSelectedPerson } = useContext(selectedUserContext);
  const onRandomSelect = () => {
    const Rand = Math.floor(Math.random() * participants.length);
    // console.log("Rand", Rand);
    dispatch({ type: "generateRand", value: "generating" });
    // console.log(state);

    setTimeout(() => {
      dispatch({ type: "foundRandom", value: "Random Found" });
      setSelectedPerson(participants.find((_, index) => Rand === index));
    }, 1000);
  };

  return { onRandomSelect };
};
