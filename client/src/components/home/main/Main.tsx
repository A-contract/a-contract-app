
import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Main = () => {
    return (
        <main style={{ flex: "1 1 auto", position: "relative", maxWidth: "1080px", marginTop: "60px", paddingTop: "20px",  }}>
        <Container style={{ display: "flex"}}>
            <Box style={{ width: "530px", marginRight: "10px", alignItems: "center" }}>
                <Typography
                component="h2"
                variant="h4"
                align="center"
                gutterBottom
                id={ "analyse-contract" }
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
            <Box style={{ width: "530px", marginLeft: "10px", alignItems: "center" }}>
                <Typography variant="h6" align="center"  paragraph>
                    Form
                </Typography>
            </Box>
        </Container>
        
        <Container style={{ display: "flex"}}>
            <Box style={{ width: "530px", marginRight: "10px", alignItems: "center" }}>
                <Typography
                component="h2"
                variant="h4"
                align="center"
                gutterBottom
                id={ "tariffs" }
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
            <Box style={{ width: "530px", marginLeft: "10px", alignItems: "center" }}>
                <Typography variant="h6" align="center"  paragraph>
                Tariffs
                </Typography>
            </Box>
        </Container>

        <Container style={{ display: "flex"}}>
            <Box style={{ width: "530px", marginRight: "10px", alignItems: "center" }}>
                <Typography
                component="h2"
                variant="h4"
                align="center"
                gutterBottom
                id={ "support" }
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
            <Box style={{ width: "530px", marginLeft: "10px", alignItems: "center" }}>
                <Typography variant="h6" align="center"  paragraph>
                Support
                </Typography>
            </Box>
        </Container>



                
        </main>
    )
}

export default Main;