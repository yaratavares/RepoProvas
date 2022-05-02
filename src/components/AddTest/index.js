import { useState } from "react";
import FormControl from "@mui/material/FormControl";

import CommonInput from "../inputs/CommonInput";
import ContentBoxList from "./style";
import SelectInput from "../inputs/SelectInput";
import { LoadingButton } from "@mui/lab";

export default function AddTest() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    title: "",
    pdfUrl: "",
    category: "",
    discipline: "",
    teacher: "",
  });

  console.log(values);
  return (
    <ContentBoxList>
      <FormControl fullWidth sx={{ m: 1, margin: "8px 0" }} variant="outlined">
        <CommonInput
          values={values}
          setValues={setValues}
          inputLabel={"Titulo da prova"}
          inputState={"title"}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1, margin: "8px 0" }} variant="outlined">
        <CommonInput
          values={values}
          setValues={setValues}
          inputLabel={"PDF da prova"}
          inputState={"pdfUrl"}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1, margin: "8px 0" }} variant="outlined">
        <SelectInput
          values={values}
          setValues={setValues}
          inputLabel={"Categoria"}
          inputState={"category"}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1, margin: "8px 0" }} variant="outlined">
        <SelectInput
          values={values}
          setValues={setValues}
          inputLabel={"Disciplina"}
          inputState={"discipline"}
        />
      </FormControl>
      <FormControl
        fullWidth
        sx={{ m: 1, margin: "8px 0" }}
        variant="outlined"
        disabled
      >
        <SelectInput
          values={values}
          setValues={setValues}
          inputLabel={"Pessoa instrutora"}
          inputState={"teacher"}
        />
      </FormControl>
      <LoadingButton
        loading={loading}
        sx={{ marginTop: "26px", height: "46px" }}
        type="submit"
        variant="contained"
        fullWidth
      >
        Enviar
      </LoadingButton>
    </ContentBoxList>
  );
}
