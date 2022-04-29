import { InputLabel, OutlinedInput } from "@mui/material";

export default function CommonInput({
  setValues,
  values,
  inputLabel,
  inputState,
}) {
  const handleChange = (props) => (event) => {
    setValues({ ...values, [props.inputState]: event.target.value });
  };

  return (
    <>
      <InputLabel htmlFor={`outlined-adornment-${inputLabel}`}>
        {inputLabel}
      </InputLabel>
      <OutlinedInput
        id={`input${inputState}`}
        value={values[inputState]}
        onChange={handleChange({ inputState })}
        label={inputLabel}
      />
    </>
  );
}
