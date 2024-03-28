import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const posts = [
  {
    id: 1,
    image: "/static/images/blog/the-definitive-guide-preview.png",
    name: "the-definitive-guide",
    title:
      "The Definitive Guide to Empowering Your Business Through Contract Analysis",
    text: "In the ever-evolving landscape of business, contracts serve as the foundation upon which relationships are built, transactions are conducted, and opportunities are seized",
    subtitle: "Read",
  },
];

const AllPosts = () => {
  const theme = useTheme();
  return (
    <>
      {posts.map((element: any) => (
        <Card sx={{ width: 500, m: "20px" }} key={element.id}>
          <CardMedia
            sx={{ height: 300 }}
            image={element.image}
            title={element.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {element.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {element.text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" href={`/blog/post/${element.name}`} sx={{color: theme.palette.info.main}} >
              <Typography >{element.subtitle}</Typography>
              
            </Button>
          </CardActions>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default AllPosts;
