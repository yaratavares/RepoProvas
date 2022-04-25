import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { ContentBoxList } from "./styled";

export default function ListNested() {
  const [open, setOpen] = useState(false);
  const [openSecundary, setOpenSecundary] = useState(false);

  return (
    <ContentBoxList>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary="10 Período" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton
          sx={{ pl: 3 }}
          onClick={() => setOpenSecundary(!openSecundary)}
        >
          <ListItemText primary="CSS" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </Collapse>

      <Collapse in={openSecundary} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="P1" secondary="2022 - globo.com (Fulano)" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton
          sx={{ pl: 3 }}
          onClick={() => setOpenSecundary(!openSecundary)}
        >
          <ListItemText primary="CSS" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </Collapse>
    </ContentBoxList>
  );
}
