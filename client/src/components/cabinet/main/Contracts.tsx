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
        originalName: null,
        name: null,
        progressStatus: 0,
    });
    const selectedContractRef = useRef(selectedContract);
    const dropzoneRef = useRef<any>(null);
    const isLawyer = props.role === "lawyer" ? true : false;
    const isCustomer = props.role === "customer" ? true : false;
    const columns: GridColDef[] = [
        { field: "id", headerName: "Number", width: 90 },
        {
            field: "originalName",
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
                            onClick={() => {
                                toPay(params.row);
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
                                onClick={() =>
                                    toProcessingContract(params.row.info.id)
                                }
                            >
                                Take in processing
                            </Button>
                        );
                    } else if (
                        params.row.info.name ===
                            selectedContract.originalName &&
                        selectedContract.progressStatus === 1
                    ) {
                        console.log(selectedContract);
                        return <>In process</>;
                    } else if (
                        (params.row.progressStatus === 1 || 2) &&
                        params.row.paymentStatus === true
                    ) {
                        return <>Pending process</>;
                    }
                } else if (isCustomer) {
                    if (params.row.paymentStatus === false)
                        return <>Wait for payment</>;
                    else if (params.row.progressStatus === 1)
                        return <>In process</>;
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
                            onClick={() => {
                                console.log(params.row.info.name);
                                downloadContract(
                                    params.row.info.name,
                                    params.row.originalName
                                );
                            }}
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
                                        params.row.info.name.substr(
                                            0,
                                            params.row.info.name.lastIndexOf(
                                                "."
                                            )
                                        ) + ".pdf",
                                        params.row.originalName
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
            try {
                const response = await axios.get(
                    "http://localhost:8000/contracts/contracts",
                    { withCredentials: true }
                );
                if (response.status === 200) {
                    const contracts = response.data.contracts;
                    let indexContract = 0;
                    const filteredContract = contracts.filter(
                        (element: any) => {
                            indexContract++;
                            return element.progressStatus === 1;
                        }
                    );

                    if (
                        filteredContract.length > 0 &&
                        filteredContract[0].progressStatus === 1
                    ) {
                        setSelectedContract({
                            id: filteredContract[0].id,
                            number: indexContract,
                            originalName: filteredContract[0].originalName,
                            name: filteredContract[0].name,
                            progressStatus: filteredContract[0].progressStatus,
                        });
                        setDataFile({
                            id: filteredContract[0].id,
                            number: indexContract,
                            originalName: filteredContract[0].originalName,
                            progressStatus: filteredContract[0].progressStatus,
                            content: "",
                        });
                    }

                    setRows(
                        contracts.map((element: any, index: number) => ({
                            id: index + 1,
                            originalName: element.originalName,
                            paymentStatus: element.paymentStatus,
                            progressStatus: element.progressStatus,
                            info: {
                                id: element.id,
                                userId: element.userId,
                                name: element.name,
                            },
                        }))
                    );
                }
            } catch (error) {
                console.log(error);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [selectedContractRef.current]);

    const sendContract = () => {
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            const originalName = file.name;
            const dataToSubmit = {
                originalName,
                file: formData.get("file"),
            };

            formData.append("data", JSON.stringify(dataToSubmit));
            axios
                .post("http://localhost:8000/contracts/upload", formData, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then(function (response: any) {
                    if (response.data.status === 200) {
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

    const toPay = (info: any) => {
        console.log("toPay", info);
    };

    const toProcessingContract = (id: number) => {
        console.log(id);
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

    const downloadContract = async (name: any, originalName: any) => {
        console.log(name, originalName);
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
            //originalName.substr(0, originalName.lastIndexOf(".")) + ".pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    const finishContract = () => {
        if (selectedContract.progressStatus && file) {
            const formData = new FormData();
            console.log(selectedContract);
            formData.append(
                "file",
                file,
                selectedContract.name.substr(
                    0,
                    selectedContract.name.lastIndexOf(".")
                ) + ".pdf"
            );

            const dataToSubmit = {
                selectedContract,
                file: formData.get("file"),
            };

            formData.append("data", JSON.stringify(dataToSubmit));

            axios
                .post("http://localhost:8000/contracts/finish", formData, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then(function (response: any) {
                    if (response.data.status === 200) {
                        console.log("Ваш файл был успешно загружен!");

                        setSelectedContract({
                            id: null,
                            number: null,
                            originalName: null,
                            name: null,
                            progressStatus: 0,
                        });
                        deleteFile();
                    } else console.log("Bad request");
                })
                .catch(function (error) {
                    console.log(error);
                });
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
                        <Box
                            sx={{
                                pb: "15px",
                                color: theme.palette.primary.main,
                            }}
                        >
                            <TextField
                                id="outlined-basic"
                                label="Search"
                                variant="outlined"
                                sx={{
                                    width: "-webkit-fill-available",
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                pb: "15px",
                                color: theme.palette.primary.main,
                            }}
                        >
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
                        <Box
                            sx={{
                                pb: "20px",
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
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
                                <Typography>
                                    {selectedContract.number}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                pb: "20px",
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
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
                                <Typography>
                                    {selectedContract.originalName}
                                </Typography>
                            </Box>
                        </Box>

                        {selectedContract.progressStatus === 1 ? (
                            <Box sx={{ pb: "15px", minHeight: "200px" }}>
                                <Box
                                    component={DropzoneArea}
                                    ref={dropzoneRef}
                                    filesLimit={1}
                                    acceptedFiles={[".pdf"]}
                                    dropzoneText={"Attach document"}
                                    onChange={(files) => setFile(files[0])}
                                />
                            </Box>
                        ) : (
                            <></>
                        )}

                        <Box
                            sx={{
                                pb: "10px",
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
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
                                disabled={!file ? true : false}
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
                                By signing up, you agree to our terms of service
                                and privacy policy
                            </Typography>
                        </Box>
                        <Box sx={{ pb: "15px" }}>
                            <Button
                                variant="outlined"
                                sx={{ width: "-webkit-fill-available" }}
                                onClick={() => sendContract()}
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
