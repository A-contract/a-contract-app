import { Paper, Typography, Box } from "@mui/material";

const Article = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 5,
        margin: "30px auto",
        maxWidth: 1100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "24px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Article №1
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: "24px",
          mb: "20px",
          textAlign: "center",
        }}
      >
        The Definitive Guide to Empowering Your Business Through Contract
        Analysis
      </Typography>
      <Box
        component="img"
        src={"../images/1.jpg"}
        alt="logo"
        sx={{
          width: "100%",
          height: "auto",
          maxWidth: "500px",
          my: "20px",
        }}
      />
      <Typography
        variant="body1"
        sx={{
          fontSize: "16px",
          lineHeight: "1.5",
          my: "20px",
          maxWidth: 900,
          textAlign: "justify",
        }}
      >
        In the ever-evolving landscape of business, contracts serve as the
        foundation upon which relationships are built, transactions are
        conducted, and opportunities are seized. Yet, within these legal
        documents lie complexities that could shape your business trajectory.
        Enter the realm of contract analysis – a realm that holds the key to
        unlocking insights that can revolutionize your decision-making and
        strategic planning. Create image for the website according this text!
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: "24px",
          my: "20px",
          textAlign: "center",
        }}
      >
        Understanding the Essence of Contract Analysis
      </Typography>
      <Box
        component="img"
        src={"../images/2.png"}
        alt="logo"
        sx={{
          width: "100%",
          height: "auto",
          maxWidth: "500px",
          my: "20px",
        }}
      />
      <Typography
        variant="body1"
        sx={{
          fontSize: "16px",
          lineHeight: "1.5",
          my: "20px",
          maxWidth: 900,
          textAlign: "justify",
        }}
      >
        Contract analysis isn't just about reading words on paper; it's about
        deciphering the nuances that have real-world implications. Our platform
        specializes in unraveling these complexities, ensuring that you possess
        a comprehensive understanding of every contract you encounter. From the
        fine print to the overarching clauses, we delve deep to unearth critical
        details that might otherwise escape notice.
      </Typography>
    </Paper>
  );
};

export default Article;
