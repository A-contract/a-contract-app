import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";

const Blog = () => {
  return (
    <>
      <Container>
        <Box sx={{ mt: "20px", mb: "50px" }}>
          <Typography variant="h4" component="h1">
            Articles
          </Typography>
        </Box>
        <Box sx={{ display: "flex", maxWidth: "1200px" }}>
          <Card sx={{ width: 325, m: "20px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={"/blog/article"}>
                Read
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Blog;
