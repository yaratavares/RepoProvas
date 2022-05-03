import toast from "react-hot-toast";
import api from "../common/services/index";

export default async function validateNewTest(values, token) {
  if (
    !values.name ||
    !values.pdfUrl ||
    !values.categoryId ||
    !values.teacherDisciplineId
  ) {
    return toast.error("Preencha todos os campos!");
  }

  const regex = new RegExp("^http(s?)://");

  if (!regex.test(values.pdfUrl)) {
    return toast.error("Insira uma url válida!");
  }

  try {
    delete values.discipline;
    await api.addNewtest(values, token);
    return toast.success("Prova adicionada!");
  } catch (err) {
    if (err.message.includes(404)) {
      return toast.error("Dados não encontrados!");
    }
    if (err.message.includes(401)) {
      return toast.error("Faça login novamente!");
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
