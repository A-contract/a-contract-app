import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Paper, Tabs } from "@mui/material";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import { useState } from "react";
import { useTypedSelector } from "@/hooks/useTypeSelector";

const Auth = () => {
  const activeFormId = useTypedSelector((state: any) => state.activeForm);
  const [tabValue, setTabValue] = useState(activeFormId);
  const tabs = [<SignIn />, <SignUp />];

  return (
    <Box
      sx={{
        mx: "auto",
        mt: "100px",
        width: "350px",
        maxWidth: "350px",
      }}
    >
      <Paper
        elevation={20}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Tabs
            value={tabValue}
            onChange={(e, newTabValue: any) => {
              setTabValue(newTabValue);
            }}
          >
            <Tab label="Sign in" value={0} sx={{ width: "150px" }}></Tab>
            <Tab label="Sign up" value={1} sx={{ width: "150px" }}></Tab>
          </Tabs>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          {tabs[tabValue]}
        </Box>
      </Paper>
    </Box>
  );
};

export default Auth;
