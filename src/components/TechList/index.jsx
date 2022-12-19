import { List } from "./../DashboardHeader/index";
import TechItem from "./../TechItem/index";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

const TechList = ({ setOpenModalEdit }) => {
  const { user } = useContext(TechContext);
  const { techs } = user;
  console.log(techs);
  return (
    <List>
      <ul>
        {techs.length === 0 ? (
          <p>Cadastre novas tecnologias</p>
        ) : (
          techs.map((item) => (
            <TechItem
              id={item.id}
              status={item.status}
              title={item.title}
              setOpenModalEdit={setOpenModalEdit}
            ></TechItem>
          ))
        )}
      </ul>
    </List>
  );
};

export default TechList;
