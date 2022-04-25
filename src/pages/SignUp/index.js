import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";

import PasswordInput from "../../components/inputs/PasswordInput";
import CommonInput from "../../components/inputs/CommonInput";
import InitDivider from "../../components/divider/InitDivider";

import valideRegistration from "../../validations/valideRegistration";
import logo from "../../common/assets/logo.png";
import {
  ContainerCenterPage,
  InitContent,
  ContainerClicks,
  GithubButton,
} from "../../common/styles/StyleInitPages";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    await valideRegistration(values, navigate);
    setLoading(false);
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
            <Link to="/login">
              <p>Já possuo cadastro</p>
            </Link>
            <LoadingButton loading={loading} variant="contained" type="submit">
              Cadastrar
            </LoadingButton>
          </ContainerClicks>
        </form>
      </ContainerCenterPage>
    </InitContent>
  );
}
