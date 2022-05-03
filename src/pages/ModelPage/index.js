import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";

import useToken from "../../common/hooks/useToken";
import api from "../../common/services";
import BasicTabs from "../../components/BasicTabs";
import Header from "../../components/Header";

import { ContentNavButtons, ContentPageModel } from "./style";
import initPageFunction from "../../common/utils/initPageFunction";

export default function ModelPage() {
  const [disciplines, setDisciplines] = useState();
  const [teachers, setTeachers] = useState();
  const [search, setSearch] = useState();
  const [tabLabel, setTabLabel] = useState("disciplina");
  const [inputAddInformations, setInputAddInformations] = useState({});
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
    await initPageFunction(
      setDisciplines,
      setTeachers,
      inputAddInformations,
      setInputAddInformations,
      token,
      logout
    );
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
            input={inputAddInformations}
            reloadPage={initPage}
          />
        ) : (
          <CircularProgress />
        )}
      </ContentNavButtons>
    </ContentPageModel>
  );
}
