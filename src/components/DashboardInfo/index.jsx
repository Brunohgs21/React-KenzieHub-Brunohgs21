import { Container } from "../DashboardHeader";
import { useEffect, useState } from "react";
import { api } from "./../../services/api";

const DashboardInfo = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("Token");
      const response = await api.get("profile", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      setUser(response.data);
    }
    getUser();
  }, []);

  return (
    <Container>
      <section>
        <span className="name">
          Olá, <span>{user == undefined ? "Usuário" : user.name}</span>
        </span>
        <span className="module">
          {user == undefined ? "Módulo" : user.course_module}
        </span>
      </section>
    </Container>
  );
};

export default DashboardInfo;
