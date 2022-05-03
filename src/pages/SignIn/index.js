import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
import useToken from "../../common/hooks/useToken";

import PasswordInput from "../../components/inputs/PasswordInput";
import CommonInput from "../../components/inputs/CommonInput";
import InitDivider from "../../components/divider/InitDivider";

import valideLogin from "../../validations/validateLogin";
import logo from "../../common/assets/logo.png";
import {
  ContainerCenterPage,
  InitContent,
  ContainerClicks,
  GithubButton,
} from "../../common/styles/StyleInitPages";

export default function SignIn() {
  const { setAndPersistToken } = useToken();
  const [loading, setLoading] = useState(false);
  const inputsConfident = [{ name: "Senha", nameState: "password" }];
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  async function login(event) {
    event.preventDefault();
    setLoading(true);

    await valideLogin(setAndPersistToken, navigate, values);
    setLoading(false);
  }

  return (
    <InitContent>
      <img src={logo} alt="logo Repoprovas" />
      <ContainerCenterPage>
        <h2>Login</h2>

        <GithubButton>ENTRAR COM O GITHUB</GithubButton>

        <InitDivider />
        <form onSubmit={login}>
          <FormControl
            fullWidth
            sx={{ m: 1, margin: "8px 0" }}
            variant="outlined"
          >
            <CommonInput
              setValues={setValues}
              values={values}
              inputLabel={"Email"}
              inputState={"email"}
            />
          </FormControl>
          {inputsConfident.map((input) => (
            <FormControl
              fullWidth
              sx={{ m: 1, margin: "8px 0" }}
              variant="outlined"
            >
              <PasswordInput
                setValues={setValues}
                values={values}
                inputLabel={input.name}
                inputState={input.nameState}
              />
            </FormControl>
          ))}
          <ContainerClicks>
            <Link to="/cadastro">
              <p>Não possuo cadastro</p>
            </Link>
            <LoadingButton loading={loading} type="submit" variant="contained">
              Entrar
            </LoadingButton>
          </ContainerClicks>
        </form>
      </ContainerCenterPage>
    </InitContent>
  );
}
