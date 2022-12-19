import { Main } from "./../DashboardHeader/index";
import TechList from "./../TechList/index";

const DashboardMain = ({ setOpenModal, setOpenModalEdit }) => {
  return (
    <Main>
      <div>
        <p className="techText">Tecnologias</p>{" "}
        <button onClick={() => setOpenModal(true)}>+</button>
      </div>
      <TechList setOpenModalEdit={setOpenModalEdit}></TechList>
    </Main>
  );
};

export default DashboardMain;
