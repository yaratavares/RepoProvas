import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import useToken from "../../common/hooks/useToken";
import api from "../../common/services";
import BasicTabs from "../../components/BasicTabs";
import Header from "../../components/Header";

import { ContentNavButtons, ContentPageModel } from "./style";

export default function ModelPage() {
  const [disciplines, setDisciplines] = useState();
  const [teachers, setTeachers] = useState();
  const { token } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(token);
    if (token) {
      initPage();
    } else {
      navigate("/login");
    }
  }, [token]);

  async function initPage() {
    try {
      const responseDisciplines = await api.getDisciplines(token);
      setDisciplines(responseDisciplines.data);

      const responseTeachers = await api.getTeachers(token);
      setTeachers(responseTeachers.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ContentPageModel>
      <Header />
      <ContentNavButtons>
        {disciplines && teachers ? (
          <BasicTabs disciplines={disciplines} teachers={teachers} />
        ) : (
          <CircularProgress />
        )}
      </ContentNavButtons>
    </ContentPageModel>
  );
}
