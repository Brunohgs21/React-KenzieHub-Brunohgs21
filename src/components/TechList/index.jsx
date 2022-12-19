import { List } from "./../DashboardHeader/index";
import TechItem from "./../TechItem/index";
import { useContext, useEffect, useState } from "react";
import { TechContext } from "../../contexts/TechContext";
import { api } from "../../services/api";

const TechList = ({ setOpenModalEdit }) => {
  // const { user } = useContext(TechContext);
  const [user, setUser] = useState();

  useEffect(() => {
    async function loadTech() {
      const token = localStorage.getItem("Token");

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
      }
    }
    loadTech();
  }, [user]);

  return (
    <List>
      <ul>
        {user === undefined || user.techs.length == 0 ? (
          <p className="empty">Cadastre novas tecnologias</p>
        ) : (
          user.techs.map((item) => (
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
