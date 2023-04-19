import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import { DropzoneArea } from "mui-file-dropzone";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "contractNumber",
    headerName: "Contract Number",
    width: 200,
    //editable: true,
  },
  {
    field: "contractName",
    headerName: "Contract Name",
    width: 200,
    //editable: true,
  },
  {
    field: "paymentStatus",
    headerName: "Payment Status",
    type: "true",
    width: 200,
    //editable: true,
  },
  {
    field: "progressStatus",
    headerName: "Progress Status",
    //description: "This column has a value getter and is not sortable.",
    //sortable: false,
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    contractNumber: "1",
    contractName: "qwe123",
    paymentStatus: false,
    progressStatus: "payment",
  },
  {
    id: 2,
    contractNumber: "2",
    contractName: "tre543",
    paymentStatus: false,
    progressStatus: "payment",
  },
];

const Contracts = () => {
  const [file, setFile] = useState<any>();
  const dropzoneRef = useRef<any>(null);
  const [rows, setRows] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "http://localhost:8000/contracts/contracts",
        {
          withCredentials: true,
        }
      );
      if (response.data.status === 202) {
        //setRows(response.data.contracts);
      }
    })();
  });

  const sendFile = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post("http://localhost:8000/contracts/upload", formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response: any) {
          if (response.data.status === 202) {
            console.log("Ваш файл был успешно загружен!");
            deleteFile();
          } else console.log("Bad request");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const deleteFile = () => {
    dropzoneRef.current.deleteFile(file, 0);
  };

  return (
    <>
      <Box sx={{ width: "400px", minWidth: "300px", pr: "7.5px" }}>
        <Paper sx={{ p: "20px" }}>
          <Box sx={{ pb: "30px" }}>
            <Typography>Analyse contract</Typography>
          </Box>
          <Box sx={{ pb: "15px" }}>
            <Box
              component={DropzoneArea}
              ref={dropzoneRef}
              filesLimit={1}
              acceptedFiles={[".doc", ".docx,", ".pdf"]}
              dropzoneText={"Attach your contract"}
              onChange={(files) => setFile(files[0])}
            />
          </Box>
          <Box sx={{ pb: "15px" }}>
            <Typography>
              By signing up, you agree to our terms of service and privacy
              policy
            </Typography>
          </Box>
          <Box sx={{ pb: "15px" }}>
            <Button
              variant="outlined"
              sx={{ width: "-webkit-fill-available" }}
              onClick={() => sendFile()}
            >
              Analyse
            </Button>
          </Box>
        </Paper>
      </Box>
      <Box sx={{ width: "inherit", pl: "7.5px" }}>
        <Paper sx={{ p: "20px" }}>
          <Box sx={{ pb: "30px" }}>
            <Typography>Contracts</Typography>
          </Box>
          <Box sx={{ height: 600, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} /> {/*checkboxSelection */}
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Contracts;
