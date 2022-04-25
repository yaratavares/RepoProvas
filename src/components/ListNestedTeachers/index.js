import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, ListItemButton, ListItemText } from "@mui/material";

import { ContentBoxList } from "./styled";
import ListNestedSecondary from "./ListNestedSecondary";

export default function ListNestedTeachers({ teacher }) {
  const [open, setOpen] = useState(false);

  const arrayTests = teacher.disciplines.filter(
    (discipline) => discipline.tests.length !== 0
  );
  console.log(arrayTests);
  return (
    <ContentBoxList>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary={`${teacher.name}`} />
        {arrayTests.length === 0 ? "" : open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {arrayTests.length !== 0
          ? arrayTests.map((disciplines) =>
              disciplines.tests.map((test) => (
                <ListNestedSecondary test={test} />
              ))
            )
          : ""}
      </Collapse>
    </ContentBoxList>
  );
}
