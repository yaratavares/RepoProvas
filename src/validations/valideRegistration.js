import toast from "react-hot-toast";
import api from "../common/services/index";

export default async function valideRegistration(data, navigate) {
  const regex = /[a-zA-Z0-9$*&@#]{8,}/;

  if (!data.email || !data.password || !data.confirmPassword) {
    return toast.error("Preencha todos os campos!");
  }
  if (!data.email.includes("@")) {
    return toast.error("Formato inválido de e-mail!");
  }
  if (data.password !== data.confirmPassword) {
    return toast.error("As senhas precisam ser iguais!");
  }
  if (!regex.test(data.password)) {
    return toast.error("Senha com ao menos 8 caracteres!");
  }

  try {
    await api.authSignUp(data);

    navigate("/login");
  } catch (err) {
    if (err.message.includes(409)) {
      return toast.error("E-mail já cadastrado!");
    }
    if (err.message.includes(422)) {
      return toast.error("Dados no formato incorreto!");
    }
    if (err.message.includes(500)) {
      toast.error("Erro na comunicação com o servidor");
      return;
    }
    console.log(err);
    toast.error("Erro desconhecido! Atualize a página");
    return;
  }
}
