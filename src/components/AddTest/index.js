import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControl from "@mui/material/FormControl";

import CommonInput from "../inputs/CommonInput";
import SelectInput from "../inputs/SelectInput";

import useToken from "../../common/hooks/useToken";
import validateNewTest from "../../validations/validateNewTest";
import ContentBoxList from "./style";

export default function AddTest({ inputItens }) {
  const [loading, setLoading] = useState(false);
  const { token } = useToken();
  const [values, setValues] = useState({
    name: "",
    pdfUrl: "",
    categoryId: "",
    discipline: "",
    teacherDisciplineId: "",
  });

  const filterTeachers = inputItens.teachers.filter(
    (teacher) => teacher.discipline.id === values.discipline
  );

  async function handleSubmitForm(event) {
    event.preventDefault();
    await validateNewTest(values, token);
  }

  return (
    <ContentBoxList>
      <form onSubmit={handleSubmitForm}>
        <FormControl
          fullWidth
          sx={{ m: 1, margin: "8px 0" }}
          variant="outlined"
        >
          <CommonInput
            values={values}
            setValues={setValues}
            inputLabel={"Titulo da prova"}
            inputState={"name"}
          />
        </FormControl>
        <FormControl
          fullWidth
          sx={{ m: 1, margin: "8px 0" }}
          variant="outlined"
        >
          <CommonInput
            values={values}
            setValues={setValues}
            inputLabel={"PDF da prova"}
            inputState={"pdfUrl"}
          />
        </FormControl>
        <FormControl
          fullWidth
          sx={{ m: 1, margin: "8px 0" }}
          variant="outlined"
        >
          <SelectInput
            values={values}
            setValues={setValues}
            inputLabel={"Categoria"}
            inputState={"categoryId"}
            itensMenu={inputItens.categories}
          />
        </FormControl>
        <FormControl
          fullWidth
          sx={{ m: 1, margin: "8px 0" }}
          variant="outlined"
        >
          <SelectInput
            values={values}
            setValues={setValues}
            inputLabel={"Disciplina"}
            inputState={"discipline"}
            itensMenu={inputItens.disciplines}
          />
        </FormControl>
        <FormControl
          fullWidth
          sx={{ m: 1, margin: "8px 0" }}
          variant="outlined"
          disabled={values.discipline === "" ? true : false}
        >
          <SelectInput
            values={values}
            setValues={setValues}
            inputLabel={"Pessoa instrutora"}
            inputState={"teacherDisciplineId"}
            itensMenu={filterTeachers}
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
      </form>
    </ContentBoxList>
  );
}
