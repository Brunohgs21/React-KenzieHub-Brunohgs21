import { createContext, useState, useEffect } from "react";
import { api } from "./../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useOutClick } from "../hooks/useOutclick";
import { formSchema } from "../services/validation/index";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("Token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");

        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  async function login(data) {
    try {
      const response = await api.post("sessions", data);

      const { token, user: userResponse } = response.data;

      setUser(userResponse);

      localStorage.setItem("Token", token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const toNavigate = location.state?.from?.pathname || "/dashboard";

      navigate(toNavigate, { replace: true });
    } catch (error) {
      console.error(error);
    }
  }

  const [newUser, setNewUser] = useState(null);

  const [pwdRequisite, setPWDRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numerCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });
  const clickRef = useOutClick(() => setPWDRequisite(false));

  function handleOnFocus() {
    setPWDRequisite(true);
  }

  function handleOnKeyUp(e) {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0123456789]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    if (data.confirmation == data.password) {
      let { email, name, contact, password, bio, course_module } = data;

      const user = {
        name: name,
        email: email,
        contact: contact,
        password: password,
        bio: bio,
        course_module: course_module,
      };

      setNewUser(user);
    } else {
      setNewUser(null);
      toast.error("As senhas digitadas são diferentes");
    }
  };

  useEffect(() => {
    if (newUser != null) {
      setUser();
    }

    async function setUser() {
      try {
        const response = await api.post("users", newUser);

        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } catch (err) {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      } finally {
        setNewUser(null);
      }
    }
  }, [newUser]);

  return (
    <AuthContext.Provider
      value={{
        login,
        user,
        loading,
        handleOnFocus,
        handleOnKeyUp,
        pwdRequisite,
        register,
        handleSubmit,
        onSubmitFunction,
        errors,
        checks,
        clickRef,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
