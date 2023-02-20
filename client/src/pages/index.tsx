import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from '@/components/home/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>A-contract</title>
        <meta name="description" content="A-contract" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
      </main>

    </>
  )
}
