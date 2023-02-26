
import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const Main = () => {
    return (
        <Box component="main" sx={{ flex: "1 1 auto", maxWidth: "1300px", px: "25px"}}>
            <Box component="div" id={ "analyse-contract" } sx={{ pt: "80px" }}>
                <Container sx={{ display: "flex"}}>
                <Box sx={{ width: "530px", marginRight: "10px", alignItems: "center" }}>
                    <Typography
                    component="h2"
                    variant="h4"
                    align="center"
                    gutterBottom
                    
                    >
                    Analyse contract 
                    </Typography>
                    <Typography variant="h6" align="center"  paragraph>
                        Analysis of the contract – is our service, which will provide you 
                        with the opportunity to save your time, needed to study contract.
                        Analysis of the contract – is our service, which will provide you 
                        with the opportunity to save your time, needed to study contract.
                        Analysis of the contract – is our service, which will provide you 
                        with the opportunity to save your time, needed to study contract.
                        Analysis of the contract – is our service, which will provide you 
                        with the opportunity to save your time, needed to study contract.
                    </Typography>
                </Box>
                <Box sx={{ width: "530px", marginLeft: "10px", alignItems: "center" }}>
                    <Typography variant="h6" align="center"  paragraph>
                        Form
                    </Typography>
                </Box>
                </Container>
            </Box>
            <Box component="div" id={ "tariffs" } sx={{ pt: "80px" }}>
                <Container sx={{ display: "flex"}}>
                    <Box sx={{ width: "530px", marginRight: "10px", alignItems: "center" }}>
                        <Typography
                        component="h2"
                        variant="h4"
                        align="center"
                        gutterBottom
                        >

                        Tariffs
                        
                        </Typography>
                        <Typography variant="h6" align="center"  paragraph>
                            Analysis of the contract – is our service, which will provide you 
                            with the opportunity to save your time, needed to study contract.
                            Analysis of the contract – is our service, which will provide you 
                            with the opportunity to save your time, needed to study contract.
                            Analysis of the contract – is our service, which will provide you 
                            with the opportunity to save your time, needed to study contract.
                            Analysis of the contract – is our service, which will provide you

                        </Typography>
                    </Box>
                    <Box sx={{ width: "530px", marginLeft: "10px", alignItems: "center" }}>
                        <Typography variant="h6" align="center"  paragraph>
                        Tariffs
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Box component="div" id={ "support" } sx={{ pt: "80px" }}>
                <Container sx={{ display: "flex"}}>
                <Box style={{ width: "530px", marginRight: "10px", alignItems: "center" }}>
                    <Typography
                    component="h2"
                    variant="h4"
                    align="center"
                    gutterBottom
                    
                    >
                    Support 
                    </Typography>
                    <Typography variant="h6" align="center"  paragraph>
                    Analysis of the contract – is our service, which will provide you 
                        with the opportunity to save your time, needed to study contract.
                        Analysis of the contract – is our service, which will provide you 
                        with the opportunity to save your time, needed to study contract.
                        Analysis of the contract – is our service, which will provide you 
                        with the opportunity to save your time, needed to study contract.
                        Analysis of the contract – is our service, which will provide you 
                        with the opportunity to save your time, needed to study contract.
                        Analysis of the contract – is our service, which will provide you 
                        with the opportunity to save your time, needed to study contract.

                    </Typography>
                </Box>
                <Box sx={{ width: "530px", marginLeft: "10px", alignItems: "center" }}>
                    <Typography variant="h6" align="center"  paragraph>
                    Support
                    </Typography>
                </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Main;