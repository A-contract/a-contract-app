import Header from "@/components/cabinet/Header";
import Main from "@/components/cabinet/Main";
import SideBar from "@/components/cabinet/SideBar";
import { Box, CssBaseline } from "@mui/material";
import axios from "axios";
import router from "next/router";
import { useEffect, useMemo, useState } from "react";

const Cabinet = () => {
  const [user, setUser] = useState(false);
  const alowRoles = useMemo(() => ["customer", "lawyer"], []);
  const [actionTrigger, setActionTrigger] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/auth/user`,
        {
          withCredentials: true,
        }
      );
      if (response.data.status === 401) router.push("/auth");
      if (response.data.status === 200) {
        if (alowRoles.includes(response.data.user.role)) {
          setUser(response.data.user);
        } else router.push("/auth");
      }
    };
    getData();
  }, [actionTrigger, alowRoles]);

  if (user)
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header user={user} />
        <SideBar user={user} />
        <Main
          user={user}
          actionTrigger={actionTrigger}
          setActionTrigger={setActionTrigger}
        />
      </Box>
    );
  else return null;
};

export default Cabinet;
