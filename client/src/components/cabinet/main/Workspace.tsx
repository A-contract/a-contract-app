import { Box, Paper } from "@mui/material";
import { height } from "@mui/system";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Workspace = () => {
  const [value, setValue] = useState("");

  return (
    <Box
      sx={{ width: "800px", height: "500px", minWidth: "300px", pr: "7.5px" }}
    >
      <Paper sx={{ p: "20px" }}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          style={{ height: "300px" }}
        />
      </Paper>
    </Box>
  );
};

export default Workspace;
