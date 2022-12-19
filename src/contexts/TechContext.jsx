import { createContext, useEffect, useState } from "react";
import { api } from "./../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
  }, []);

  async function loadTechAgain() {
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

  async function postTech(data) {
    try {
      const response = await api.post("users/techs", data);
    } catch (error) {
      console.error(error);
    } finally {
      loadTechAgain();
    }
  }
  async function deleteTech() {
    const techId = localStorage.getItem("TechId");
    try {
      const text = "deleted";
      const response = await api.delete(`/users/techs/${techId}`);
      localStorage.setItem("TechId", text);
    } catch (error) {
      console.error(error);
    } finally {
      loadTechAgain();
    }
  }

  async function updateTech(data) {
    const techId = localStorage.getItem("TechId");
    try {
      const response = await api.put(`/users/techs/${techId}`, data);
    } catch (error) {
      console.error(error);
    } finally {
      loadTechAgain();
    }
  }

  return (
    <TechContext.Provider value={{ postTech, deleteTech, user, updateTech }}>
      {children}
    </TechContext.Provider>
  );
};
