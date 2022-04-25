import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormControl } from "@mui/material";

import PasswordInput from "../../components/inputs/PasswordInput";
import CommonInput from "../../components/inputs/CommonInput";
import InitDivider from "../../components/divider/InitDivider";

import valideRegistration from "../../validations/valideRegistration";
import logo from "../../common/assets/logo.jpg";
import {
  ContainerCenterPage,
  InitContent,
  ContainerClicks,
  GithubButton,
} from "../../common/styles/StyleInitPages";

export default function SignUp() {
  const navigate = useNavigate();
  const inputsConfident = [
    { name: "Senha", nameState: "password" },
    { name: "Confirme sua senha", nameState: "confirmPassword" },
  ];
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    email: "",
    showPassword: false,
  });

  async function signUp(event) {
    event.preventDefault();

    await valideRegistration(values, navigate);
  }

  return (
    <InitContent>
      <img src={logo} alt="logo Repoprovas" />
      <ContainerCenterPage>
        <h2>Cadastro</h2>
        <GithubButton>ENTRAR COM O GITHUB</GithubButton>
        <InitDivider />
        <form onSubmit={signUp}>
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
            <p>Já possuo cadastro</p>
            <Button variant="contained" type="submit">
              Cadastrar
            </Button>
          </ContainerClicks>
        </form>
      </ContainerCenterPage>
    </InitContent>
  );
}
