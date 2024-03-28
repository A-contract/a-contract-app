import { useActions } from "@/hooks/useAction";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";

const analyse = {
  name: "Analyse contract",
  items: [
    {
      icon: "•",
      text: "Names of the parties;",
    },
    {
      icon: "•",
      text: "Subject of the contact;",
    },
    {
      icon: "•",
      text: "Payment procedure(Fees);",
    },
    {
      icon: "•",
      text: "The term of the contract;",
    },
    {
      icon: "•",
      text: "The procedure for termination of the contract;",
    },
    {
      icon: "•",
      text: "Procedure for resolving disputes;",
    },
    {
      icon: "•",
      text: "Confidentiality;",
    },
    {
      icon: "•",
      text: "The pitfalls of the contract;",
    },
  ],
};

const AnalyseContract = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { setActiveAuthForm } = useActions();

  return (
    <>
      <Box
        component="div"
        id={"analyse-contract"}
        sx={{ pt: "120px", pb: "60px" }}
      >
        <Container component="div" sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box
            component="div"
            sx={{
              maxWidth: "530px",
              mx: "10px",
              alignItems: "center",
            }}
          >
            <Typography
              component="h2"
              variant="h4"
              fontWeight="600"
              align="left"
              pb="10px"
              color={theme.palette.primary.dark}
              gutterBottom
            >
              Analyse contract
            </Typography>

            <Typography
              variant="h6"
              align="left"
              textAlign="justify"
              color={theme.palette.primary.dark}
              paragraph
            >
              Analysis of the contract – is our service, which will provide you
              with the opportunity to save your time, needed to study contract.
            </Typography>
            <Typography
              variant="h6"
              align="left"
              py="2px"
              my="2px"
              color={theme.palette.primary.dark}
              paragraph
            >
              Service identify key clauses of contract such as:
            </Typography>
            <List sx={{ fontSize: "20px" }}>
              {analyse.items.map((value, index) => (
                <ListItem key={index} sx={{ py: "0" }}>
                  <ListItemIcon
                    sx={{
                      minWidth: "20px",
                      color: theme.palette.primary.dark,
                    }}
                  >
                    {value.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: "18px",
                          color: theme.palette.primary.dark,
                        }}
                      >
                        {value.text}
                      </Typography>
                    }
                  ></ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            component="div"
            sx={{
              maxWidth: "550px",
              mx: "10px",
              ml: isMatch ? "0" : "20px",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                width: isMatch ? "350px" : "530px",
                border: 0,
                px: "30px",
                py: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                image="/static/images/analyse-contract.png"
                height="400px"
                width={isMatch ? 300 : 440}
                style={{ borderRadius: 3 }}
              />
              <CardContent sx={{ mr: "auto" }}>
                <Typography gutterBottom color="text.main">
                  Qualitative and quick analysis of your contracts
                </Typography>
              </CardContent>
              <Box
                component={Link}
                href="auth"
                onClick={() => setActiveAuthForm(1)}
              >
                <Button
                  size="medium"
                  color="primary"
                  variant="outlined"
                  sx={{
                    bgcolor: theme.palette.info.light,
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.info.main,
                    width: isMatch ? 300 : 440,
                    "&:hover": {
                      bgcolor: theme.palette.info.main,
                      borderColor: theme.palette.info.main,
                    },
                  }}
                >
                  Analyse
                </Button>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AnalyseContract;
