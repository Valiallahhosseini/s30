import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import { useRandomSelector } from "@/hooks/useRandomSelector";

import { selectedUserContext } from "@/contexts/selectedUserContext";

const SelectedPerson = () => {
  const { onRandomSelect } = useRandomSelector();
  //   const { onRandomSelect } = useContext(UserContext);
  const { state } = useContext(UserContext);
  const { participants } = useContext(UserContext);
  const { selectedPerson } = useContext(selectedUserContext);
  return (
    <>
      {participants.length > 1 && (
        <button onClick={() => onRandomSelect()}>Select a Random User</button>
      )}
      <div>
        {state === "Random Found" && `Selected Person : ${selectedPerson.name}`}
      </div>
      <div>{state === "generating" && <div>Picking ...</div>}</div>
    </>
  );
};
export default SelectedPerson;
