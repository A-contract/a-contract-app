import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/home/header/Header'
import Footer from '@/components/home/footer/Footer'
import Main from '@/components/home/main/Main'


export default function Home() {
  return (
    <>
      <main className={styles.wrapper }>
        <Header /> 
        <Main /> {/* without ThemeProvider / Default stylization */}
        <Footer />
      </main>
    </>
  )
}
