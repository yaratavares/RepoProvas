import { ListItemButton, ListItemText, List } from "@mui/material";

export default function ListNestedSecondary({ test }) {
  return (
    <>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 3 }}>
          <ListItemText
            primary={`${test.category.name}`}
            secondary={`${test.name} - (${test.teacherDiscipline.discipline.name})`}
          />
        </ListItemButton>
      </List>
    </>
  );
}
