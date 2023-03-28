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

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8000/api/user", {
        withCredentials: true,
      });
      //console.log(response.data);
      if (response.data.status === 401) router.push("/auth");
      if (response.data.status === 202) {
        setAuth(true);
        setUser(response.data.user);
      }
    })();
  });

  if (auth)
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header user={user} />
        <SideBar />
        <Main />
      </Box>
    );
  else return <></>;
};

export default Cabinet;
