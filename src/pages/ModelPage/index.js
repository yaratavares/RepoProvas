import BasicTabs from "../../components/BasicTabs";
import Header from "../../components/Header";
import { ContentNavButtons, ContentPageModel } from "./style";

export default function ModelPage() {
  return (
    <ContentPageModel>
      <Header />
      <ContentNavButtons>
        <BasicTabs />
      </ContentNavButtons>
    </ContentPageModel>
  );
}
