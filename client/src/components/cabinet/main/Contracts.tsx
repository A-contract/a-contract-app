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
import { useActions } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useDispatch } from "react-redux";

const Contracts = (props: any) => {
  const { setDataFile, updateDraft } = useActions();
  const workspaceState = useTypedSelector((state: any) => state.workspace);
  const [file, setFile] = useState<any>();
  const [rows, setRows] = useState<any>([]);
  const [selectedContract, setSelectedContract] = useState<any>({
    id: null,
    number: null,
    name: null,
    progressStatus: 0,
  });
  const dropzoneRef = useRef<any>(null);
  const isLawyer = props.role === "lawyer" ? true : false;
  const isCustomer = props.role === "customer" ? true : false;
  const columns: GridColDef[] = [
    { field: "id", headerName: "Number", width: 90 },
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
      renderCell: (params: any) => {
        if (params.row.paymentStatus) return <>Paid</>;
        else if (isCustomer)
          return (
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.info.main,
                bgcolor: theme.palette.secondary.light,
              }}
            >
              To pay
            </Button>
          );
        else if (isLawyer) {
          return <>Not paid</>;
        }
      },
    },
    {
      field: "progressStatus",
      headerName: "Progress Status",
      width: 250,
      renderCell: (params: any) => {
        if (isLawyer) {
          if (
            selectedContract.progressStatus !== 1 &&
            params.row.paymentStatus === true
          ) {
            return (
              <Button
                variant="outlined"
                sx={{
                  color: theme.palette.info.main,
                  bgcolor: theme.palette.secondary.light,
                }}
                onClick={() => toProcessingContract(params.row.info.id)}
              >
                Take in processing
              </Button>
            );
          } else if (
            params.row.name === selectedContract.name &&
            selectedContract.progressStatus === 1
          )
            return <>In process</>;
          else if (
            (params.row.progressStatus === 1 || 2) &&
            params.row.paymentStatus === true
          ) {
            return <>Pending process</>;
          }
        } else if (isCustomer) {
          if (params.row.paymentStatus === false) return <>Wait for payment</>;
          else if (params.row.progressStatus === 1) return <>In process</>;
          else if (params.row.progressStatus === 2) return <>Ready</>;
          else if (
            params.row.progressStatus === 0 &&
            params.row.paymentStatus === true
          )
            return <>In process</>;
        }
      },
    },
    {
      field: "Download",
      headerName: "Download document",
      type: "true",
      width: 250,
      renderCell: (params: any) => {
        if (isLawyer) {
          return (
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.info.main,
                bgcolor: theme.palette.secondary.light,
              }}
              onClick={() => downloadContract(params.row)}
            >
              Download
            </Button>
          );
        } else if (isCustomer) {
          if (params.row.progressStatus === 2) {
            return (
              <Button
                variant="outlined"
                sx={{
                  color: theme.palette.info.main,
                  bgcolor: theme.palette.secondary.light,
                }}
                onClick={() =>
                  downloadContract(
                    params.row.name.substr(
                      0,
                      params.row.name.lastIndexOf(".")
                    ) + ".pdf"
                  )
                }
              >
                Download
              </Button>
            );
          } else {
            return <>No</>;
          }
        }
      },
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const response = await axios.get(
        "http://localhost:8000/contracts/contracts",
        { withCredentials: true }
      );
      if (response.data.status === 202) {
        let indexContract = 0;
        const filteredContract =
          response.data.contracts.filter((element: any) => {
            indexContract++;
            return element.progressStatus === 1;
          }) || [];

        if (filteredContract.length > 0)
          if (filteredContract[0].progressStatus === 1) {
            setSelectedContract({
              id: filteredContract[0].id,
              number: indexContract,
              name: filteredContract[0].name,
              progressStatus: filteredContract[0].progressStatus,
            });
            setDataFile({
              id: filteredContract[0].id,
              number: indexContract,
              name: filteredContract[0].name,
              progressStatus: filteredContract[0].progressStatus,
              content: "",
            });
          }
        setRows(
          response.data.contracts.map((element: any, index: number) => ({
            id: index + 1,
            name: element.name,
            paymentStatus: element.paymentStatus,
            progressStatus: element.progressStatus,
            info: {
              id: element.id,
              userId: element.userId,
            },
          }))
        );
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [selectedContract]);

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

  const toProcessingContract = (id: number) => {
    axios.post(
      "http://localhost:8000/contracts/processing",
      {
        id: id,
      },
      {
        withCredentials: true,
      }
    );
  };

  const downloadContract = async (name: any) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/contracts/download",
        {
          fileName: name,
        },
        {
          withCredentials: true,
          responseType: "blob",
        }
      );

      const url = URL.createObjectURL(response.data);

      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const finishContract = async () => {
    if (selectedContract.progressStatus) {
      try {
        await axios.post(
          "http://localhost:8000/contracts/finish",
          {
            id: selectedContract.id,
          },
          {
            withCredentials: true,
          }
        );

        setSelectedContract({
          id: null,
          number: null,
          name: null,
          progressStatus: 0,
        });
      } catch (error) {
        console.error("Error finishing contract:", error);
      }
    }
  };

  return (
    <>
      {isLawyer ? (
        <Box sx={{ width: "500px", minWidth: "300px", pr: "7.5px" }}>
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
                defaultValue={10}
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
            <Box sx={{ pb: "20px", display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  width: "120px",
                  color: theme.palette.primary.main,
                }}
              >
                <Typography>Number</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "160px",
                }}
              >
                <Typography>{selectedContract.number}</Typography>
              </Box>
            </Box>
            <Box sx={{ pb: "20px", display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  width: "120px",
                  color: theme.palette.primary.main,
                }}
              >
                <Typography>Name</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "160px",
                }}
              >
                <Typography>{selectedContract.name}</Typography>
              </Box>
            </Box>

            {selectedContract.progressStatus === 1 ? (
              <Box sx={{ pb: "15px", minHeight: "200px" }}>
                <Box
                  component={DropzoneArea}
                  ref={dropzoneRef}
                  filesLimit={1}
                  acceptedFiles={[".doc", ".docx,", ".pdf"]}
                  dropzoneText={"Attach document"}
                  onChange={(files) => setFile(files[0])}
                />
              </Box>
            ) : (
              <></>
            )}

            <Box sx={{ pb: "10px", display: "flex", flexDirection: "row" }}>
              <Button
                variant="outlined"
                sx={{
                  height: "32px",
                  width: "-webkit-fill-available",
                  visibility:
                    selectedContract.progressStatus === 1
                      ? "visible"
                      : "hidden",
                }}
                onClick={() => finishContract()}
              >
                Finish
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
