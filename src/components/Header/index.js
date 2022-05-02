import LogoutIcon from "@mui/icons-material/Logout";

import logo from "../../common/assets/logo.png";
import useToken from "../../common/hooks/useToken";
import { ContentHeader, ContentImgAndLogout, ContentSearchBar } from "./style";

export default function Header({ tabLabel, value, setValue }) {
  const { logout } = useToken();

  function handleChange(event) {
    if (event.value === "") {
      setValue();
    } else {
      setValue({ ...value, [tabLabel]: event.value });
    }
  }

  return (
    <ContentHeader>
      <ContentImgAndLogout>
        <img src={logo} alt="logo Repoprovas" />
        <LogoutIcon fontSize="large" className="iconLogout" onClick={logout} />
      </ContentImgAndLogout>
      <ContentSearchBar>
        {tabLabel ? (
          <input
            value={value ? value[tabLabel] : ""}
            onChange={(e) => handleChange(e.target)}
            name="search"
            placeholder={`Pesquise por ${tabLabel}`}
          ></input>
        ) : (
          <h2>Adicione uma prova</h2>
        )}
      </ContentSearchBar>
    </ContentHeader>
  );
}
