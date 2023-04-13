import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import { DropzoneArea } from "mui-file-dropzone";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useRef, useState } from "react";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    //editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    //editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    //editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Contracts = () => {
  const [file, setFile] = useState<any>();
  const dropzoneRef = useRef<any>(null);

  const sendFile = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post("http://localhost:8000/files/upload", formData, {
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
