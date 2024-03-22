import { Box, Container, Divider, Tab, Tabs, Typography } from "@mui/material";
import Header from "@/components/home/header/Header";
import Footer from "@/components/home/footer/Footer";
import { useState } from "react";
import AllPosts from "@/components/home/blog/AllPosts";

const tabs = [{ name: "All Posts", component: <AllPosts /> }];

const Posts = () => {
  const [tabValue, setTabValue] = useState({
    name: "All Posts",
    component: <AllPosts />,
  });

  const handleTabChange = (
    event: React.SyntheticEvent,
    newTabValue: { name: string; component: JSX.Element }
  ) => {
    setTabValue(newTabValue);
  };

  return (
    <Box>
      <Header />
      <Container sx={{ pt: "80px", mb: "100px" }}>
        <Box
          sx={{
            mt: "20px",
            mb: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" component="h1">
            Blog
          </Typography>
        </Box>
        <Divider />

        <Box sx={{ width: "100%", mt: "5px", mb: "5px" }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            {tabs.map((element: any) => (
              <Tab value={element} label={element.name} />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", maxWidth: "1200px" }}>
          {tabValue.component}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Posts;
