import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, ListItemButton, ListItemText } from "@mui/material";

import { ContentBoxList } from "./styled";
import ListNestedSecondary from "./ListNestedSecondary";

export default function ListNestedDisciplines({ term }) {
  const [open, setOpen] = useState(false);

  return (
    <ContentBoxList>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary={`${term.number} Período`} />
        {term.discipline.length === 0 ? (
          ""
        ) : open ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {term.discipline.map((discipline) => (
          <ListNestedSecondary discipline={discipline} />
        ))}
      </Collapse>
    </ContentBoxList>
  );
}
