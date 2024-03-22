import Header from "@/components/home/header/Header";
import { Paper, Typography, Box } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface Post {
  id: number;
  name: string;
  title: string;
  text: string;
}
const posts = [
  {
    id: 1,
    image: "/static/images/blog/the-definitive-guide-preview.jpg",
    name: "the-definitive-guide",
    text: [
      {
        title:
          "The Definitive Guide to Empowering Your Business Through Contract Analysis",
        image: "/static/images/blog/the-definitive-guide-1.jpg",
        paragraph:
          "In the ever-evolving landscape of business, contracts serve as the foundation upon which relationships are built, transactions are conducted, and" +
          "opportunities are seized. Yet, within these legal documents lie complexities that could shape your business trajectory. Enter the realm of contract analysis – a realm that holds the key to unlocking insights that can revolutionize your decision-making and strategic planning.",
      },
      {
        title: "Understanding the Essence of Contract Analysis:",
        image: "/static/images/blog/understanding-the-essence-1.png",
        paragraph:
          "Contract analysis isn't just about reading words on paper; it's about deciphering the nuances that have real-world implications. Our platform specializes in unraveling these complexities, ensuring that you possess a comprehensive understanding of every contract you encounter. From the fine print to the overarching clauses, we delve deep to unearth critical details that might otherwise escape notice.",
      },
      {
        title: "Turning Risks into Opportunities:",
        image: "/static/images/blog/turning-risks-into-opportunities-1.jpg",
        paragraph:
          "Contracts are often accompanied by potential risks that can impact your business's bottom line. Our contract analysis services are designed to shed light on these risks, enabling you to proactively address them. By identifying areas of concern, you can engage in constructive negotiations, implement risk-mitigation strategies, and navigate uncertain terrain with greater confidence.",
      },
      {
        title: "Elevating Negotiation and Decision-Making:",
        image:
          "/static/images/blog/elevating-negotiation-and-decision-making-1.jpg",
        paragraph:
          "In a world where time is of the essence, making informed decisions is imperative. Our team of seasoned analysts combines legal expertise with technological prowess to offer you a comprehensive picture of what each contract entails. Armed with this knowledge, you can negotiate from a position of strength, secure favorable terms, and propel your business toward prosperity.",
      },

      {
        title: "Navigating Complexities with Ease:",
        image: "/static/images/blog/navigating-complexities-with-ease-1.jpg",
        paragraph:
          "Legal jargon can be intimidating, often causing individuals to overlook crucial details. Our platform acts as your trusted guide, simplifying complex terms and concepts. We're committed to providing you with insights that not only clarify legal language but also empower you to leverage the full potential of your contracts.",
      },
      {
        title: "The Path to Business Excellence:",
        image: "/static/images/blog/the-path-to-business-excellence-1.jpg",
        paragraph:
          "Achieving excellence in business requires a multifaceted approach, and contract analysis plays a pivotal role. It's not just about understanding the present – it's about anticipating the future. By partnering with us, you gain access to a wealth of knowledge that transcends traditional contract reading. We equip you with the tools to make impactful decisions and forge relationships built on a strong legal foundation.",
      },
      {
        title: "Conclusion: Your Contractual Compass",
        image: "/static/images/blog/your-contractual-compass-1.jpg",
        paragraph:
          "As you navigate the dynamic waters of business, let contract analysis be your guiding light. Our platform is dedicated to arming you with insights that empower growth, mitigate risks, and optimize opportunities. With every contract you analyze, you're taking a step toward a future marked by informed choices and strategic victories. Experience the transformative power of contract analysis – a journey toward success that begins with understanding and ends with empowerment.",
      },
    ],
  },
];

const Post = () => {
  const router = useRouter();

  const post = posts.filter(
    (element: any) => element.name === router.query.post
  )[0];

  if (!post) {
    return <></>;
  } else
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
        <Header />
        {post.text.map((element: any, index: number) => (
          <Box key={index}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "24px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            ></Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: "24px",
                mb: "20px",
                textAlign: "center",
              }}
            >
              {element.title}
            </Typography>
            <Box
              component="img"
              src={`${element.image}`}
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
              {element.paragraph}
            </Typography>
          </Box>
        ))}
      </Paper>
    );
};

export default Post;
