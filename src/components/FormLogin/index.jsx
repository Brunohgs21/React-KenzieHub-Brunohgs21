import { BtnLink, Div, Logo } from "./../RegisterHeader/index";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../contexts/AuthContext";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaLogin } from "../../services/validation";

const FormLogin = () => {
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <Div>
      <Logo>Kenzie Hub</Logo>
      <section>
        <form onSubmit={handleSubmit(login)}>
          <div className="text">
            <p className="text1">Login</p>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email?.message}

            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message}

            <button className="btn2">Entrar</button>
          </div>
        </form>

        <p>Ainda não possui uma conta?</p>
        <BtnLink to="/register">Cadastre-se</BtnLink>
      </section>
    </Div>
  );
};

export default FormLogin;
