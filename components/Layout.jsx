import React, { useContext } from 'react';
import { ThemeContext } from '../lib/ThemeContext';
import Head from 'next/head';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = (props) => {
  const [darkMode] = useContext(ThemeContext);

  return (
    <div>
      <Head>
        <title>Afx31 ~ Blog</title>
        <meta name='description' content='Created by Afx31' />
      </Head>
      <div className={`App ${darkMode ? 'darkmode' : 'lightmode'}`}>
        <Navbar
          civicLink={props.civicLink}
          wagoLink={props.wagoLink}
          frogoLink={props.frogoLink}
          ef9Link={props.ef9Link}
        />
        {props.children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout;