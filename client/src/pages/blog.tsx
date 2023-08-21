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
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: 325, m: "20px" }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: 325, m: "20px" }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>

                {/* <Paper
                    elevation={3}
                    sx={{
                        padding: 3,
                        marginTop: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h4" component="h1">
                        The Definitive Guide to Empowering Your Business Through
                        Contract Analysis
                    </Typography>
                    <Box
                        component="img"
                        src={"images/1.jpg"}
                        alt="logo"
                        sx={{ width: "500px" }}
                    />
                    <Typography variant="body1" sx={{ marginTop: "1rem" }}>
                        In the ever-evolving landscape of business, contracts
                        serve as the foundation upon which relationships are
                        built, transactions are conducted, and opportunities are
                        seized. Yet, within these legal documents lie
                        complexities that could shape your business trajectory.
                        Enter the realm of contract analysis – a realm that
                        holds the key to unlocking insights that can
                        revolutionize your decision-making and strategic
                        planning. Create image for the website according this
                        text!
                    </Typography>
                    <Typography variant="h4" component="h1">
                        The Definitive Guide to Empowering Your Business Through
                        Contract Analysis
                    </Typography>
                    <Box
                        component="img"
                        src={"images/2.png"}
                        alt="logo"
                        sx={{ width: "500px" }}
                    />
                    <Typography variant="body1">
                        Contracts are often accompanied by potential risks that
                        can impact your business's bottom line. Our contract
                        analysis services are designed to shed light on these
                        risks, enabling you to proactively address them. By
                        identifying areas of concern, you can engage in
                        constructive negotiations, implement risk-mitigation
                        strategies, and navigate uncertain terrain with greater
                        confidence.
                    </Typography>
                    <Typography variant="h4" component="h1">
                        The Definitive Guide to Empowering Your Business Through
                        Contract Analysis
                    </Typography>
                    <Box
                        component="img"
                        src={"images/3.jpg"}
                        alt="logo"
                        sx={{ width: "500px" }}
                    />
                    <Typography variant="body1">
                        In a world where time is of the essence, making informed
                        decisions is imperative. Our team of seasoned analysts
                        combines legal expertise with technological prowess to
                        offer you a comprehensive picture of what each contract
                        entails. Armed with this knowledge, you can negotiate
                        from a position of strength, secure favorable terms, and
                        propel your business toward prosperity.
                    </Typography>
                    <Typography variant="h4" component="h1">
                        The Definitive Guide to Empowering Your Business Through
                        Contract Analysis
                    </Typography>
                    <Box
                        component="img"
                        src={"images/4.jpg"}
                        alt="logo"
                        sx={{ width: "500px" }}
                    />
                    <Typography variant="body1">
                        Legal jargon can be intimidating, often causing
                        individuals to overlook crucial details. Our platform
                        acts as your trusted guide, simplifying complex terms
                        and concepts. We're committed to providing you with
                        insights that not only clarify legal language but also
                        empower you to leverage the full potential of your
                        contracts.
                    </Typography>
                    <Typography variant="h4" component="h1">
                        The Definitive Guide to Empowering Your Business Through
                        Contract Analysis
                    </Typography>
                    <Box
                        component="img"
                        src={"images/5.jpg"}
                        alt="logo"
                        sx={{ width: "500px" }}
                    />
                    <Typography variant="body1">
                        Achieving excellence in business requires a multifaceted
                        approach, and contract analysis plays a pivotal role.
                        It's not just about understanding the present – it's
                        about anticipating the future. By partnering with us,
                        you gain access to a wealth of knowledge that transcends
                        traditional contract reading. We equip you with the
                        tools to make impactful decisions and forge
                        relationships built on a strong legal foundation.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        The Definitive Guide to Empowering Your Business Through
                        Contract Analysis
                    </Typography>
                    <Typography variant="body1">
                        As you navigate the dynamic waters of business, let
                        contract analysis be your guiding light. Our platform is
                        dedicated to arming you with insights that empower
                        growth, mitigate risks, and optimize opportunities. With
                        every contract you analyze, you're taking a step toward
                        a future marked by informed choices and strategic
                        victories. Experience the transformative power of
                        contract analysis – a journey toward success that begins
                        with understanding and ends with empowerment.
                    </Typography>
                </Paper> */}
                {/* <Paper
                    elevation={1}
                    sx={{ padding: 3, marginTop: 3 }}
                    className="comments"
                >
                    <Typography variant="h5" component="h2">
                        Coments
                    </Typography>
                    <Box className="comment" style={{ marginTop: "1rem" }}>
                        <Typography variant="subtitle1">
                            Name of commentator
                        </Typography>
                        <Typography variant="body2">Comments...</Typography>
                    </Box>
                </Paper> */}
                {/* <Paper elevation={1} sx={{ padding: 3, marginTop: 3 }}>
                    <Typography variant="body2" color="textSecondary">
                        &copy; 2023 Your name
                    </Typography>
                </Paper> */}
            </Container>
        </>
    );
};

export default Blog;
