import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function PasswordInput({
  setValues,
  values,
  inputLabel,
  inputState,
}) {
  const handleChange = (props) => (event) => {
    setValues({ ...values, [props.inputState]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <InputLabel htmlFor={`input${inputState}`}>{inputLabel}</InputLabel>
      <OutlinedInput
        id={`input${inputState}`}
        type={values.showPassword ? "text" : "password"}
        value={values[inputState]}
        onChange={handleChange({ inputState })}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={inputLabel}
      />
    </>
  );
}
