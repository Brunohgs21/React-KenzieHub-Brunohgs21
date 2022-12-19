import { DivModal, BackGround } from "../DashboardHeader";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../contexts/AuthContext";
import { useContext } from "react";

import { TechContext } from "./../../contexts/TechContext";

const TechModal = ({ setOpenModal }) => {
  const { register, handleSubmit } = useForm();
  const { postTech } = useContext(TechContext);
  return (
    <BackGround>
      <DivModal>
        <div>
          <h1>Cadastrar tecnologias</h1>
          <button className="closeBtn" onClick={() => setOpenModal(false)}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(postTech)}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" {...register("title")} />

          <label htmlFor="status">Selecionar status</label>
          <select name="" id="" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button className="buttonSubmit" type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </DivModal>
    </BackGround>
  );
};

export default TechModal;
