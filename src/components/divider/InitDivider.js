import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  marginBottom: "16px",
  marginTop: "16px",
}));

export default function InitDivider() {
  return (
    <Root>
      <Divider>ou</Divider>
    </Root>
  );
}
