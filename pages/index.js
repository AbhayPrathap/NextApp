/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useRouter } from 'next/router'
import { Paper, Chip } from '@material-ui/core';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
function Home() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Paper elevation={12}>
      <Head>
        <title>Country Magnifier</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.headdiv}>
          <h1 className={styles.title}>
              <font color="#d12228">Cou</font>
              <font color="#f68a1e">ntr</font>
              <font color="#fde01a">y  Ma</font>
              <font color="#007940">gn</font>
              <font color="#24408e">if</font>
              <font color="#732982">ier</font>
          </h1>
        </div>
        <div className={styles.descriptiondiv}>
            <p className={styles.description}>
              This Country Magnifier will help you to select a country and view details like country code, capital,
              languages spoken, currency, states and many more. <br></br>Let's explore !!!
            </p>
        </div>
        <Chip 
        label="Get's Started" 
        color="primary" 
        onClick={() => router.push('/details')}
        />
      </main>

      <footer className={styles.footer}>
        <p>#PrideMonth</p>
      </footer>

      </Paper>
    </div>
  )
}
export default Home
