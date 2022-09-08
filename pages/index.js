import Head from 'next/head';
import Image from 'next/image';

import NextLink from 'next/link';
import Navbar from '../components/Navbar/Navbar.jsx';
import HomePage from '../components/HomePage/HomePage.jsx';
import ViewPostPage from '../components/ViewPostPage/ViewPostPage.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Home = () => {

  return (
    <div className={`App`}>
      <Head>
        <title>Blogsite</title>
        <meta name="description" content="Created by Afx31" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <Navbar />
      <HomePage />
      <ViewPostPage />
      <Footer />
    </div>
  )
}

export default Home;
