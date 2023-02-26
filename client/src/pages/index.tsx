import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from '@/components/home/header/Header'
import Footer from '@/components/home/footer/Footer'
import Main from '@/components/home/main/Main'


export default function Home() {
  return (
    <>
      <main className={styles.wrapper }>
        <Header /> 
        <Main />
        <Footer />
      </main>
    </>
  )
}
