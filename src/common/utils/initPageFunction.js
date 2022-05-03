import toast from "react-hot-toast";
import api from "../services";

export default async function initPageFunction(
  setDisciplines,
  setTeachers,
  inputAddInformations,
  setInputAddInformations,
  token,
  logout
) {
  try {
    const responseDisciplines = await api.getDisciplines(token);
    setDisciplines(responseDisciplines.data);

    const responseTeachers = await api.getTeachers(token);
    setTeachers(responseTeachers.data);

    const categories = await api.inputAddInformations.getAllCategories(token);
    const disciplines = await api.inputAddInformations.getAllDisciplines(token);
    const teachers = await api.inputAddInformations.getAllTeachers(token);
    setInputAddInformations({
      ...inputAddInformations,
      categories: categories.data,
      disciplines: disciplines.data,
      teachers: teachers.data,
    });
  } catch (err) {
    if (err.message.includes(401)) {
      toast.error("Faça login!");
      logout();
    }
    toast.error("Erro com o servidor! Atualize a página");
  }
}
