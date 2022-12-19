import { BtnLink, Div, Logo } from "./../RegisterHeader/index";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../contexts/AuthContext";
import { useContext } from "react";

const FormLogin = () => {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

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

            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />

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
