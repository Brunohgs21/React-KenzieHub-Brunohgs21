import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required(<p>Nome obrigatório</p>),
  email: yup
    .string()
    .required(<p>E-mail obrigatório</p>)
    .email(<p>E-mail inválido</p>),
  contact: yup.string().required(<p>Telefone obrigatório</p>),
  bio: yup.string().required(<p>Insira uma bio</p>),
  password: yup.string().required(<p>Insira uma senha</p>),
});
