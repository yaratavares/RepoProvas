import { useEffect, useState } from "react";
import { Button, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useToken from "../../common/hooks/useToken";

import PasswordInput from "../../components/inputs/PasswordInput";
import CommonInput from "../../components/inputs/CommonInput";
import InitDivider from "../../components/divider/InitDivider";

import valideLogin from "../../validations/validateLogin";
import logo from "../../common/assets/logo.jpg";
import {
  ContainerCenterPage,
  InitContent,
  ContainerClicks,
  GithubButton,
} from "../../common/styles/StyleInitPages";

export default function SignIn() {
  const { setAndPersistToken } = useToken();
  const inputsConfident = [{ name: "Senha", nameState: "password" }];
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/disciplinas");
    }
  });

  async function login(event) {
    event.preventDefault();

    await valideLogin(setAndPersistToken, navigate, values);
  }

  return (
    <InitContent>
      <img src={logo} alt="logo Repoprovas" />
      <ContainerCenterPage>
        <h2>Login</h2>
        <GithubButton>ENTRAR COM O GITHUB</GithubButton>
        <InitDivider />
        <form onSubmit={login}>
          <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
            <CommonInput
              setValues={setValues}
              values={values}
              inputLabel={"Email"}
              inputState={"email"}
            />
          </FormControl>
          {inputsConfident.map((input) => (
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <PasswordInput
                setValues={setValues}
                values={values}
                inputLabel={input.name}
                inputState={input.nameState}
              />
            </FormControl>
          ))}
          <ContainerClicks>
            <p>Não possuo cadastro</p>
            <Button type="submit" variant="contained">
              Entrar
            </Button>
          </ContainerClicks>
        </form>
      </ContainerCenterPage>
    </InitContent>
  );
}