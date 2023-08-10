import { Box, Container, Paper, Typography } from "@mui/material";

const Blog = () => {
  return (
    <>
      <Container>
        <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
          <Typography variant="h4" component="h1">
            Header Article
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
            Author : Name author | Date: 10 august 2023
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            Begin article
          </Typography>
          <Typography variant="body1">Main text</Typography>
          <Typography variant="body1">Other paragraph</Typography>
        </Paper>
        <Paper
          elevation={1}
          sx={{ padding: 3, marginTop: 3 }}
          className="comments"
        >
          <Typography variant="h5" component="h2">
            Coments
          </Typography>
          <Box className="comment" style={{ marginTop: "1rem" }}>
            <Typography variant="subtitle1">Name of commentator</Typography>
            <Typography variant="body2">Comments...</Typography>
          </Box>
          {/* Другие комментарии здесь */}
        </Paper>
        <Paper elevation={1} sx={{ padding: 3, marginTop: 3 }}>
          <Typography variant="body2" color="textSecondary">
            &copy; 2023 Your name
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Blog;
