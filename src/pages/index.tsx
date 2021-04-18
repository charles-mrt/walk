import Head from 'next/head';

import styles from "../styles/pages/Home.module.css";

import { HeaderBox } from "../components/headerBox";
import { ProductBox } from '../components/ProductBox';
import { FooterBox } from "../components/footerBox";


export default function Home() {

  return (
    <div>
      <Head><title>walk - running shoes</title></Head>
      <HeaderBox />
      <div className={styles.container}> <ProductBox /> </div>
      <FooterBox />
    </div>
  )

}
