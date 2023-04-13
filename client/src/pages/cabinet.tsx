import Header from "@/components/cabinet/Header";
import Main from "@/components/cabinet/Main";
import SideBar from "@/components/cabinet/SideBar";
import { Box, CssBaseline } from "@mui/material";
import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";

const Cabinet = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(false);
  const alowRoles = ["customer", "lawyer"];

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8000/auth/user", {
        withCredentials: true,
      });
      if (response.data.status === 401) router.push("/auth");
      if (response.data.status === 202) {
        if (alowRoles.includes(response.data.user.role)) {
          setAuth(true);
          setUser(response.data.user);
        } else router.push("/auth");
      }
    })();
  });

  if (auth)
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header user={user} />
        <SideBar user={user} />
        <Main user={user} />
      </Box>
    );
  else return <></>;
};

export default Cabinet;
