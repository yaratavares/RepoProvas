import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";

import useToken from "../../common/hooks/useToken";
import api from "../../common/services";
import BasicTabs from "../../components/BasicTabs";
import Header from "../../components/Header";

import { ContentNavButtons, ContentPageModel } from "./style";

export default function ModelPage() {
  const [disciplines, setDisciplines] = useState();
  const [teachers, setTeachers] = useState();
  const [search, setSearch] = useState();
  const [tabLabel, setTabLabel] = useState("disciplina");
  const { token, logout } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      if (search) {
        if (search?.disciplina) {
          filterDisciplines();
        }
        if (search?.instrutor) {
          filterTeachers();
        }
      } else {
        initPage();
      }
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [token, search]);

  async function initPage() {
    try {
      const responseDisciplines = await api.getDisciplines(token);
      setDisciplines(responseDisciplines.data);

      const responseTeachers = await api.getTeachers(token);
      setTeachers(responseTeachers.data);
    } catch (err) {
      if (err.message.includes(401)) {
        toast.error("Faça login!");
        logout();
      }
      toast.error("Erro com o servidor! Atualize a página");
    }
  }

  async function filterDisciplines() {
    try {
      const responseDisciplines = await api.searchDisciplines(
        token,
        search.disciplina
      );
      setDisciplines(responseDisciplines.data);
    } catch {
      toast.error("Erro com o servidor! Atualize a página");
    }
  }

  async function filterTeachers() {
    try {
      console.log("Filtrando professores");
      console.log(search);
      const responseTeachers = await api.searchTeachers(
        token,
        search.instrutor
      );
      setTeachers(responseTeachers.data);
    } catch {
      toast.error("Erro com o servidor! Atualize a página");
    }
  }

  return (
    <ContentPageModel>
      <Header tabLabel={tabLabel} value={search} setValue={setSearch} />
      <ContentNavButtons>
        {disciplines && teachers ? (
          <BasicTabs
            disciplines={disciplines}
            teachers={teachers}
            setTabLabel={setTabLabel}
            setSearch={setSearch}
          />
        ) : (
          <CircularProgress />
        )}
      </ContentNavButtons>
    </ContentPageModel>
  );
}
