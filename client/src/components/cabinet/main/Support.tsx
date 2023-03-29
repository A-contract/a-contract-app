import { Box, Button, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Support = () => {
  return (
    <Paper sx={{ width: "inherit", p: "20px", mx: "auto" }}>
      <Box sx={{ pb: "30px" }}>
        <Typography>Support</Typography>
      </Box>
      <Box
        sx={{
          width: "inherit",
          maxWidth: "80%",
          mx: "auto",
          border: 1,
          minHeight: "500px",
          color: "#cbcbcb",
          display: "flex",
          alignContent: "flex-end",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            minHeight: "450px",
            width: "inherit",
            maxWidth: "1000px",
            mx: "auto",
            my: "10px",
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column-reverse",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              mr: "auto",
              mb: "10px",
            }}
          >
            <Box sx={{ height: "40px" }}>
              <AccountCircleIcon sx={{ fontSize: "40px" }}></AccountCircleIcon>
            </Box>
            <Box sx={{ ml: "5px" }}>
              <Paper sx={{ py: "8px", px: "12px", borderRadius: "20px" }}>
                Response
              </Paper>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              ml: "auto",
              mb: "10px",
            }}
          >
            <Box sx={{ mr: "5px" }}>
              <Paper sx={{ py: "8px", px: "12px", borderRadius: "20px" }}>
                Send
              </Paper>
            </Box>
            <Box sx={{ height: "40px" }}>
              <AccountCircleIcon sx={{ fontSize: "40px" }}></AccountCircleIcon>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "inherit",
            maxWidth: "1000px",
            mx: "auto",
            my: "10px",
            display: "flex",
            alignItems: "flex-end",
            height: "40px",
          }}
        >
          <Box sx={{ width: "inherit", maxHeight: "40px", p: 0 }}>
            <TextField
              size="small"
              sx={{ width: "inherit", height: "40px", p: 0 }}
            ></TextField>
          </Box>
          <Box sx={{ height: "38.5px" }}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ ml: "10px" }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Support;
