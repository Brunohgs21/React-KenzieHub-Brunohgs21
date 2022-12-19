import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.jsx";
import DashboardInfo from "../../components/DashboardInfo/index.jsx";
import DashboardMain from "../../components/DashboardMain/index.jsx";
import { Div } from "./../Login/index";
import TechModal from "../../components/Modal";
import { useState } from "react";
import ModalEdit from "./../../components/ModalEdit/index";

const DashBoard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  console.log(openModal);
  return (
    <Div>
      <DashboardHeader />
      <DashboardInfo />
      <DashboardMain
        setOpenModal={setOpenModal}
        setOpenModalEdit={setOpenModalEdit}
      />
      {openModal ? <TechModal setOpenModal={setOpenModal} /> : ""}
      {openModalEdit ? <ModalEdit setOpenModalEdit={setOpenModalEdit} /> : ""}
    </Div>
  );
};

export default DashBoard;
