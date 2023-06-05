import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { DropzoneArea } from "mui-file-dropzone";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import theme from "utils/theme";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Contract Name",
    width: 300,
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
    width: 400,
    renderCell: (params: any) => {
      if (params.value === 0) {
        return (
          <Button
            variant="contained"
            sx={{
              color: theme.palette.secondary.main,
              bgcolor: theme.palette.primary.light,
            }}
          >
            Take in processing
          </Button>
        );
      } else {
        return <span>{params.value}</span>;
      }
    },
  },
];

const Contracts = (props: any) => {
  const [file, setFile] = useState<any>();
  const dropzoneRef = useRef<any>(null);
  const [rows, setRows] = useState<any>([]);
  const isLawyer = props.role === "lawyer" ? true : false;
  const isCustomer = props.role === "customer" ? true : false;
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const response = await axios.get(
        "http://localhost:8000/contracts/contracts",
        { withCredentials: true }
      );
      console.log(response.data.status);
      if (response.data.status === 202) {
        // let contracts = response.data.contracts;
        // console.log(contracts);
        setRows(response.data.contracts);
        console.log(response.data.contracts);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

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
          console.log(response);
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
      {isLawyer ? (
        <Box sx={{ width: "400px", minWidth: "300px", pr: "7.5px" }}>
          <Paper sx={{ p: "20px" }}>
            <Box sx={{ pb: "30px" }}>
              <Typography>Filters</Typography>
            </Box>
            <Box sx={{ pb: "15px", color: theme.palette.primary.main }}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                sx={{
                  width: "-webkit-fill-available",
                }}
              />
            </Box>
            <Box sx={{ pb: "15px", color: theme.palette.primary.main }}>
              <Select
                placeholder={"user"}
                label={"user"}
                sx={{
                  width: "-webkit-fill-available",
                  height: 40,
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
            <Box sx={{ pb: "15px" }}>
              <Button
                variant="outlined"
                sx={{ width: "-webkit-fill-available" }}
              >
                Filter
              </Button>
            </Box>
          </Paper>
          <Paper sx={{ p: "20px", mt: 2 }}>
            <Box sx={{ pb: "30px" }}>
              <Typography>Selected contract</Typography>
            </Box>
            <Box sx={{ pb: "15px", color: theme.palette.primary.main }}>
              <Typography>Number</Typography>
            </Box>
            <Box sx={{ pb: "15px", color: theme.palette.primary.main }}>
              <Typography>Name</Typography>
            </Box>
            <Box sx={{ pb: "15px", color: theme.palette.primary.main }}>
              <Typography>Progress status</Typography>
            </Box>
            <Box sx={{ pb: "15px" }}>
              <Button
                variant="outlined"
                sx={{ width: "-webkit-fill-available" }}
              >
                Filter
              </Button>
            </Box>
          </Paper>
        </Box>
      ) : (
        <></>
      )}
      {isCustomer ? (
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
      ) : (
        <></>
      )}
      <Box sx={{ width: "inherit", pl: "7.5px" }}>
        <Paper sx={{ p: "20px" }}>
          <Box sx={{ pb: "30px" }}>
            <Typography>Contracts</Typography>
          </Box>
          <Box sx={{ height: 600, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Contracts;
