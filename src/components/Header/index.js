import LogoutIcon from "@mui/icons-material/Logout";

import logo from "../../common/assets/logo.png";
import useToken from "../../common/hooks/useToken";
import { ContentHeader, ContentImgAndLogout, ContentSearchBar } from "./style";

export default function Header() {
  const { logout } = useToken();

  return (
    <ContentHeader>
      <ContentImgAndLogout>
        <img src={logo} alt="logo Repoprovas" />
        <LogoutIcon fontSize="large" className="iconLogout" onClick={logout} />
      </ContentImgAndLogout>
      <ContentSearchBar>
        <input placeholder={`Pesquise por disciplina`}></input>
      </ContentSearchBar>
    </ContentHeader>
  );
}
