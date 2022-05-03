import { useState } from "react";
import { Collapse, ListItemButton, ListItemText, List } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import api from "../../../common/services";
import useToken from "../../../common/hooks/useToken";
import Views from "./style";
import toast from "react-hot-toast";

export default function ListNestedSecondary({ discipline, reloadPage }) {
  const [openSecundary, setOpenSecundary] = useState(false);
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
      <ListItemButton
        sx={{ pl: 3 }}
        onClick={() => setOpenSecundary(!openSecundary)}
      >
        <ListItemText primary={`${discipline.name}`} />
        {discipline.teachers[0].tests.length === 0 ? (
          ""
        ) : openSecundary ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItemButton>
      <Collapse in={openSecundary} timeout="auto" unmountOnExit>
        {discipline.teachers[0].tests.map((test) => (
          <List
            component="div"
            disablePadding
            onClick={() => handleClickTest(test.id, test.pdfUrl)}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                primary={`${test.category.name}`}
                secondary={`${test.name} - (${discipline.teachers[0].teacher.name})`}
              />
              <Views>
                <RemoveRedEyeOutlinedIcon />
                <p>{test.views}</p>
              </Views>
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </>
  );
}
