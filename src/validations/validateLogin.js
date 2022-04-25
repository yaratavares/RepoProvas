import toast from "react-hot-toast";
import api from "../common/services/index";

export default async function valideLogin(
  setAndPersistToken,
  navigate,
  values
) {
  console.log(values);
  if (!values.email || !values.password) {
    return toast.error("Preencha todos os campos!");
  }
  if (!values.email.includes("@")) {
    return toast.error("Formato inválido de e-mail!");
  }

  try {
    const result = await api.authLogin(values);

    setAndPersistToken(result.data.token);
    navigate("/disciplinas");
  } catch (err) {
    if (err.message.includes(404)) {
      return toast.error("E-mail não encontrado!");
    }
    if (err.message.includes(401)) {
      return toast.error("Senha incorreta!");
    }
    if (err.message.includes(422)) {
      return toast.error("Dados no formato incorreto!");
    }
    if (err.message.includes(500)) {
      toast.error("Erro na comunicação com o servidor");
      return;
    }
    toast.error("Erro desconhecido! Atualize a página");
    return;
  }
}
