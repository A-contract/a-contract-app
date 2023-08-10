import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Setting = (props: any) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const user = props.user;

  return (
    <Paper sx={{ width: "inherit", p: "20px", mx: "auto" }}>
      <Box sx={{ pb: "30px" }}>
        <Typography>Setting</Typography>
      </Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
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
          <Box sx={{ display: "flex", my: 6 }}>
            <Box sx={{ width: 200 }}>
              <Typography>Photo</Typography>
            </Box>
            <Box>
              <Typography>Your photo</Typography>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", my: 2 }}>
            <Box sx={{ width: 200, mt: "5px" }}>
              <Typography>Name</Typography>
            </Box>
            <Box sx={{ width: 200, mt: "5px" }}>
              <Typography>{user.name}</Typography>
            </Box>
            <Box sx={{ width: 200 }}>
              <Button variant="outlined">Edit</Button>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", my: 2 }}>
            <Box sx={{ width: 200, mt: "5px" }}>
              <Typography>Surname</Typography>
            </Box>
            <Box sx={{ width: 200, mt: "5px" }}>
              <Typography>{user.surname}</Typography>
            </Box>
            <Box>
              <Button variant="outlined">Edit</Button>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", my: 2 }}>
            <Box sx={{ width: 200, mt: "5px" }}>
              <Typography>Username</Typography>
            </Box>
            <Box sx={{ width: 200, mt: "5px" }}>
              <Typography>{user.username}</Typography>
            </Box>
            <Box>
              <Button variant="outlined">Edit</Button>
            </Box>
          </Box>
          <Divider />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
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
            <Box>
              <Typography sx={{ width: 200, mt: "5px" }}>
                {user.email}
              </Typography>
            </Box>
            <Box>
              <Button variant="outlined">Change email</Button>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", my: 2 }}>
            <Box sx={{ width: 200, mt: "5px" }}>
              <Typography>Password</Typography>
            </Box>
            <Box>
              <Typography sx={{ width: 200, mt: "5px" }}>********</Typography>
            </Box>
            <Box>
              <Button variant="outlined">Change password</Button>
            </Box>
          </Box>
          <Divider />
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default Setting;
