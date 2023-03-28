import { useActions } from "@/hooks/useAction";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const { setActiveAuthForm } = useActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = () => {
    axios
      .post(
        "http://localhost:8000/api/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response: any) {
        console.log(response.data.status);
        if (response.data.status === 202) router.push("/cabinet");
        if (response.data.status === 401)
          console.log("Wrong email or password");
      });
  };

  return (
    <>
      <Box sx={{ pb: "25px" }}>
        <Typography sx={{ fontWeight: "600" }}>Sign In</Typography>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <TextField
          required
          placeholder={"email"}
          label={"email"}
          onChange={(event: any) => {
            setEmail(event.target.value);
          }}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box sx={{ pb: "25px" }}>
        <TextField
          required
          placeholder={"password"}
          label={"password"}
          type={showPassword ? "text" : "password"}
          sx={{ width: "300px" }}
          onChange={(event: any) => {
            setPassword(event.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((show) => !show)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      {/* component={Link} href="cabinet" */}
      <Box sx={{ pb: "25px" }}>
        <Button
          variant="outlined"
          onClick={submit}
          sx={{
            bgcolor: theme.palette.info.light,
            color: theme.palette.secondary.main,
            borderColor: theme.palette.info.main,
            width: "300px",
            "&:hover": {
              bgcolor: theme.palette.info.main,
              borderColor: theme.palette.info.main,
            },
          }}
        >
          Sign in
        </Button>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <Link href={"#"}>
          <Typography
            sx={{
              width: "300px",
              textAlign: "center",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.info.main,
              },
            }}
          >
            Don't remember your password?
          </Typography>
        </Link>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <Typography
          sx={{
            width: "300px",
            textAlign: "center",
            fontSize: "14px",
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.info.main,
            },
          }}
          onClick={() => setActiveAuthForm(1)}
        >
          Don't have an account? Sign up{" "}
        </Typography>
      </Box>
    </>
  );
};

export default SignIn;
