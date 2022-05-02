import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectInput({
  values,
  setValues,
  inputLabel,
  inputState,
}) {
  const handleChange = (props) => (event) => {
    setValues({ ...values, [props.inputState]: event.target.value });
  };

  return (
    <>
      <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={values[inputState]}
        label={inputLabel}
        onChange={handleChange({ inputState })}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </>
  );
}
