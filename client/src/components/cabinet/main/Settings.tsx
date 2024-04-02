import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import axios from "axios";

const Settings = (props: any) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [name, setName] = useState<string>(props.user.name);
  const [surname, setSurname] = useState<string>(props.user.surname);

  const user = props.user;

  const saveFullName = () => {
    axios
      .post(
        `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/settings/setFullName`,
        {
          name: name,
          surname: surname,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        props.setActionTrigger(!props.actionTrigger);
      });
  };

  useEffect(() => {
    setName(props.user.name);
  }, [props]);

  return (
    <Paper sx={{ width: "inherit", p: "20px", mx: "auto" }}>
      <Box sx={{ pb: "30px" }}>
        <Typography>Setting</Typography>
      </Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => {
          setExpanded(isExpanded ? "panel1" : false);
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          <Box sx={{ display: "flex", my: 2 }}>
            <Box sx={{ width: 170, mt: "5px" }}>
              <Typography>Name</Typography>
            </Box>
            <Box sx={{ width: 200, mr: 1, mt: "1px" }}>
              <TextField
                size="small"
                variant="standard"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ width: 200 }}>
              <Button
                variant="outlined"
                size={"small"}
                onClick={() => {
                  saveFullName();
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", my: 2 }}>
            <Box sx={{ width: 170, mt: "5px" }}>
              <Typography>Surname</Typography>
            </Box>
            <Box sx={{ width: 200, mr: 1, mt: "1px" }}>
              <TextField
                size="small"
                variant="standard"
                value={surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ width: 200 }}>
              <Button
                variant="outlined"
                size={"small"}
                onClick={() => {
                  saveFullName();
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
          <Divider />
        </AccordionDetails>
      </Accordion>
      {/* <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => {
          setExpanded(isExpanded ? "panel2" : false);
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Account management
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          <Box sx={{ display: "flex", my: 2 }}>
            <Box sx={{ width: 200, mt: "5px" }}>
              <Typography>Email</Typography>
            </Box>
            <Box sx={{ width: 200, mt: "1px" }}>
              <Typography>{user.email}</Typography>
            </Box>
            <Box sx={{ width: 200, mr: 1, mt: "1px" }}>
              <TextField size="small" variant="standard" value={user.email} />
            </Box>
            <Box>
              <Button variant="outlined" size={"small"}>
                Save
              </Button>
            </Box>
          </Box>
          <Divider />
        </AccordionDetails>
      </Accordion> */}
    </Paper>
  );
};

export default Settings;
