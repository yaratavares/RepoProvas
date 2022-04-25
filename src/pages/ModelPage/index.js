import { useEffect, useState } from "react";
import api from "../../common/services";
import BasicTabs from "../../components/BasicTabs";
import Header from "../../components/Header";
import { ContentNavButtons, ContentPageModel } from "./style";

export default function ModelPage() {
  const [disciplines, setDisciplines] = useState();

  useEffect(() => {
    initPage();
  }, []);

  async function initPage() {
    try {
      const result = await api.getDisciplines();
      setDisciplines(result.data);
    } catch (err) {
      console.log(err);
    }
  }

  if (!disciplines) return <h1>Loading...</h1>;
  return (
    <ContentPageModel>
      <Header />
      <ContentNavButtons>
        <BasicTabs disciplines={disciplines} />
      </ContentNavButtons>
    </ContentPageModel>
  );
}
