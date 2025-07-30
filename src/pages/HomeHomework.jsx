import Card from "@/components/general/Card";
import List from "@/components/List";

import RegistrationForm from "@/components/RegisterationForm";
import SelectedPerson from "../components/SelectedPerson";

const Home = () => {
  return (
    <>
      <Card>
        <RegistrationForm />
        <List />
        <SelectedPerson />
      </Card>
    </>
  );
};

export default Home;
