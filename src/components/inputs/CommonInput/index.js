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
        id="outlined-adornment-weight"
        value={values[inputState]}
        onChange={handleChange({ inputState })}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          "aria-label": "weight",
        }}
        label={inputLabel}
      />
    </>
  );
}
