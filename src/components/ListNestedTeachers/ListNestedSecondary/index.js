import { ListItemButton, ListItemText, List } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import toast from "react-hot-toast";

import api from "../../../common/services";
import useToken from "../../../common/hooks/useToken";
import Views from "./style";

export default function ListNestedSecondary({ test, reloadPage }) {
  const { token } = useToken();

  async function handleClickTest(id, url) {
    try {
      await api.updateViews(id, token);
      window.open(url, "_blank");
      reloadPage();
    } catch {
      toast.error("Aconteceu um erro! Tente novamente");
    }
  }

  return (
    <>
      <List
        component="div"
        disablePadding
        onClick={() => handleClickTest(test.id, test.pdfUrl)}
      >
        <ListItemButton sx={{ pl: 3 }}>
          <ListItemText
            primary={`${test.category.name}`}
            secondary={`${test.name} - (${test.teacherDiscipline.discipline.name})`}
          />
          <Views>
            <RemoveRedEyeOutlinedIcon />
            <p>{test.views}</p>
          </Views>
        </ListItemButton>
      </List>
    </>
  );
}
