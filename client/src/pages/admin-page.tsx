import { Box } from "@mui/material";
import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";

const AdminPage = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(false);
  const alowRoles = ["admin"];

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8000/api/user", {
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

  if (auth) return <Box sx={{ display: "flex" }}>Admin </Box>;
  else return <></>;
};

export default AdminPage;
