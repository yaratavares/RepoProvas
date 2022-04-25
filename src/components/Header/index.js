import LogoutIcon from "@mui/icons-material/Logout";

import logo from "../../common/assets/logo.png";
import { ContentHeader, ContentImgAndLogout, ContentSearchBar } from "./style";

export default function Header() {
  return (
    <ContentHeader>
      <ContentImgAndLogout>
        <img src={logo} alt="logo Repoprovas" />
        <LogoutIcon fontSize="large" className="iconLogout" />
      </ContentImgAndLogout>
      <ContentSearchBar>
        <input placeholder={`Pesquise por disciplina`}></input>
      </ContentSearchBar>
    </ContentHeader>
  );
}
