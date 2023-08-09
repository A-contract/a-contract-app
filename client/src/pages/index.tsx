import styles from "@/styles/Home.module.css";
import Header from "@/components/home/header/Header";
import Footer from "@/components/home/footer/Footer";
import Main from "@/components/home/main/Main";

const Home = () => {
  return (
    <>
      <main className={styles.wrapper}>
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  );
};

export default Home;
