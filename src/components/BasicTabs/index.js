import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import ListNestedDisciplines from "../ListNestedDisciplines";
import ListNestedTeachers from "../ListNestedTeachers";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ disciplines, teachers }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(teachers);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Disciplinas" {...a11yProps(0)} />
          <Tab label="Instrutores" {...a11yProps(1)} />
          <Tab label="Adicionar" {...a11yProps(2)} disabled />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className="contentList">
        {disciplines.map((term) => (
          <ListNestedDisciplines term={term} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1} className="contentList">
        {teachers.map((teacher) => (
          <ListNestedTeachers teacher={teacher} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={2} className="contentList" />
    </Box>
  );
}
