import { useContext, useMemo } from "react";
import { UserContext } from "@/contexts/UserContext";
import { selectedUserContext } from "@/contexts/selectedUserContext";
import { useDelete } from "@/hooks/useDelete";

const List = () => {
  const { onDelete } = useDelete();
  const { participants } = useContext(UserContext);
  const listColors = ["Red", "blue", "green", "brown"];

  // console.log(selectColor);

  return (
    <div>
      <h1>List of Participants</h1>
      <div>
        {participants.length > 0 && (
          <ol className="list-wrap">
            {participants.map((item, index) => {
              const backgroundColor = listColors[index % listColors.length];
              return (
                <li
                  key={item.phonenumber}
                  className="listChild-wrap"
                  style={{ backgroundColor }}
                >
                  <div className="list-content">
                    {item.name} - {item.phonenumber}
                  </div>
                  <button onClick={() => onDelete(item.phonenumber)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
};
export default List;
