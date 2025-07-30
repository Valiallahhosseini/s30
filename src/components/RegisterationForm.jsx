import { useContext, useMemo, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const { participants, dispatchParticipant } = useContext(UserContext);
  const { handleSubmit, register, formState, reset } = useForm();
  const [showRegButton, setshowRegButton] = useState(true);
  const [showRegWindow, setShowWindow] = useState(false);

  const addAParticipant = () => {
    setShowWindow(true);
    setshowRegButton(false);
  };

  const phoneNumbersArr = useMemo(() => {
    return participants.map((item) => {
      return item.phonenumber;
    });
  }, [participants]);

  const submitParticipant = (data) => {
    phoneNumbersArr.includes(data.phonenumber)
      ? alert("The participant already exists")
      : dispatchParticipant({
          type: "addparticipant",
          value: [...participants, data],
        });

    reset();
  };
  // console.log(participants.length);

  return (
    <>
      <div>
        {!!showRegButton && (
          <button onClick={addAParticipant} className="btn btn-primary">
            Add A Participant
          </button>
        )}
        {!!showRegWindow && (
          <div>
            <form onSubmit={handleSubmit(submitParticipant)}>
              <div className="form-wrap">
                <label>Full Name</label>
                <input type="text" {...register("name")} />
              </div>
              <div className="form-wrap-l">
                <label>Phone Number</label>
                <input
                  type="number"
                  {...register("phonenumber", {
                    required: "Phone number is required",
                  })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add a participant
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
export default RegistrationForm;
