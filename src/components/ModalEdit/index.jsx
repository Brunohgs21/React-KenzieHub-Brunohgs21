import React, { useState } from "react";
import { DivModal, BackGround } from "../DashboardHeader";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { useForm } from "react-hook-form";
const ModalEdit = ({ setOpenModalEdit }) => {
  const { user, deleteTech, updateTech } = useContext(TechContext);
  const { techs } = user;
  const { register, handleSubmit } = useForm();

  const techId = localStorage.getItem("TechId");
  let filtro = "";
  if (techId != "deleted") {
    filtro = techs.filter((item) => {
      return item.id == techId;
    });
  }

  return (
    <BackGround>
      <DivModal>
        <div>
          <h1>Tecnologia Detalhes</h1>
          <button className="closeBtn" onClick={() => setOpenModalEdit(false)}>
            X
          </button>
        </div>

        <form onSubmit={handleSubmit(updateTech)}>
          <label htmlFor="">Nome do projeto</label>
          <input
            disabled
            type="text"
            name=""
            id=""
            value={techId != "deleted" ? filtro[0].title : "Tecnologia"}
          />

          <label htmlFor="">Status</label>
          <select name="" id="" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <section>
            <button className="btnSave" type="submit">
              Salvar alterações
            </button>
          </section>
        </form>
        <button className="btnDelete" type="button" onClick={deleteTech}>
          Excluir
        </button>
      </DivModal>
    </BackGround>
  );
};

export default ModalEdit;
