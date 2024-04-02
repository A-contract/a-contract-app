import { Box, Button, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useEffect, useState } from "react";

interface IChat {
  adminId: number;
  dateCreated: string;
  id: number;
  name: string;
  userId: number;
}

const Support = () => {
  const [chat, setChat] = useState<IChat>();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [actionTrigger, setActionTrigger] = useState<boolean>(false);

  const validateMessage = (text: string) => {
    return text.length > 0;
  };

  const getChat = async () => {
    const response = await axios.post(
      `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/support/getChat`,
      {},
      {
        withCredentials: true,
      }
    );

    if (response.data.chat) {
      setChat(response.data.chat);
      setMessages(response.data.messages);
    }
  };

  useEffect(() => {
    getChat();
  }, [actionTrigger]);

  useEffect(() => {
    const interval = setInterval(() => {
      getChat();
    }, 10000);
    return () => clearInterval(interval);
  });

  const startChat = async () => {
    await axios
      .post(
        `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/support/startChat`,
        {},
        {
          withCredentials: true,
        }
      )
      .then(() => {
        setActionTrigger(!actionTrigger);
      });
  };

  const sendMessage = async () => {
    if (validateMessage(message))
      await axios
        .post(
          `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/support/sendMessage`,
          {
            message: message,
            chatId: chat?.id,
          },
          {
            withCredentials: true,
          }
        )
        .then(() => {
          setMessage("");
          setActionTrigger(!actionTrigger);
        });
  };

  return (
    <Paper sx={{ width: "inherit", p: "20px", mx: "auto" }}>
      <Box sx={{ pb: "30px" }}>
        <Typography>Support</Typography>
      </Box>
      <Box
        sx={{
          width: "inherit",
          maxWidth: "1000px",
          mx: "auto",
          border: 1,
          minHeight: "500px",
          height: 500,
          maxHeight: "500px",
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
            px: "15px",
            overflow: "auto",
          }}
        >
          {messages.map((item: any, index: number) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                ml: chat?.userId === item.senderId ? "auto" : "0",
                mr: chat?.userId !== item.senderId ? "auto" : "0",
                mb: "10px",
              }}
              key={index}
            >
              <Box sx={{ height: "40px" }}>
                <AccountCircleIcon
                  sx={{ fontSize: "40px" }}
                ></AccountCircleIcon>
              </Box>
              <Box sx={{ ml: "5px" }}>
                <Paper sx={{ py: "8px", px: "12px", borderRadius: "20px" }}>
                  {item.message}
                </Paper>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "inherit",
          maxWidth: "1000px",
          mx: "auto",
          px: "15px",
          borderTop: 0,
          borderBottom: 1,
          borderLeft: 1,
          borderRight: 1,
          minHeight: "auto",
          color: "#cbcbcb",
          display: "flex",
          alignContent: "flex-end",
          alignItems: "flex-end",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
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
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </Box>
          <Box sx={{ height: "38.5px" }}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ ml: "10px" }}
              onClick={() => {
                sendMessage();
              }}
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
