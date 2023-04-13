import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Paper, Tabs } from "@mui/material";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useActions } from "@/hooks/useAction";
import theme from "utils/theme";
import Link from "next/link";

const Auth = () => {
  const activeFormId = useTypedSelector(
    (state: any) => state.auth.activeFormId
  );
  const { setActiveAuthForm } = useActions();
  const tabs = [<SignIn />, <SignUp />];

  return (
    <Box
      sx={{
        mx: "auto",
        mt: "100px",
        width: "350px",
        maxWidth: "350px",
        borderRadius: "5px",
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
        <Box
          component={Link}
          href="/"
          sx={{
            bgcolor: theme.palette.primary.main,
            width: "-webkit-fill-available",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "5px 5px 0 0",
            mb: "5px",
          }}
        >
          <Box>
            <Box
              component="img"
              src={"/images/logo.png"}
              alt="logo"
              sx={{
                width: "160px",
                borderRadius: "5px",
                p: "10px",
                mx: "auto",
              }}
            />
          </Box>
        </Box>
        <Box>
          <Tabs
            value={activeFormId}
            onChange={(e, newTabValue: any) => {
              setActiveAuthForm(newTabValue);
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
          {tabs[activeFormId]}
        </Box>
      </Paper>
    </Box>
  );
};

export default Auth;
