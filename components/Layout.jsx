import Head from 'next/head';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = (props) =>  (
  <div>
    <Head>
      <title>Blogsite</title>
      <meta name="description" content="Created by Afx31" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={`App`}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  </div>
);

export default Layout;