import { useEffect, useState } from "react";

import api from "../../common/services";
import BasicTabs from "../../components/BasicTabs";
import Header from "../../components/Header";

import { ContentNavButtons, ContentPageModel } from "./style";

export default function ModelPage() {
  const [disciplines, setDisciplines] = useState();
  const [teachers, setTeachers] = useState();

  useEffect(() => {
    initPage();
  }, []);

  async function initPage() {
    try {
      const responseDisciplines = await api.getDisciplines();
      setDisciplines(responseDisciplines.data);

      const responseTeachers = await api.getTeachers();
      setTeachers(responseTeachers.data);
    } catch (err) {
      console.log(err);
    }
  }

  if (!disciplines || !teachers) return <h1>Loading...</h1>;
  return (
    <ContentPageModel>
      <Header />
      <ContentNavButtons>
        <BasicTabs disciplines={disciplines} teachers={teachers} />
      </ContentNavButtons>
    </ContentPageModel>
  );
}
