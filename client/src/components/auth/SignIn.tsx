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
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const { setActiveForm } = useActions();

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
      <Box component={Link} href="cabinet" sx={{ pb: "25px" }}>
        <Button
          variant="outlined"
          //   disableRipple

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
          onClick={() => setActiveForm(1)}
        >
          Don't have an account? Sign up{" "}
        </Typography>
      </Box>
      {/* <Box sx={{ pb: "10px" }}>
        <Typography sx={{ width: "300px", textAlign: "center" }}>
          Continue with google{" "}
        </Typography>
      </Box> */}
    </>
  );
};

export default SignIn;
