import { useState } from "react";
import { Collapse, ListItemButton, ListItemText, List } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function ListNestedSecondary({ discipline }) {
  const [openSecundary, setOpenSecundary] = useState(false);

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
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                primary={`${test.category.name}`}
                secondary={`${test.name} - (${discipline.teachers[0].teacher.name})`}
              />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </>
  );
}
