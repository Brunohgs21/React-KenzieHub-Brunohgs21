import { Logo2 } from "../RegisterHeader/index";
import { Header } from "./index";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const navigate = useNavigate();

  function verifyPermission() {
    const user = localStorage.getItem("Token") || "";

    if (user == "" || undefined) {
      navigate("/");
    }
  }
  verifyPermission();

  function logout() {
    localStorage.clear();
    verifyPermission();
  }

  return (
    <Header>
      <Logo2>Kenzie Hub</Logo2>
      <button onClick={logout}>Sair</button>
    </Header>
  );
};

export default DashboardHeader;
