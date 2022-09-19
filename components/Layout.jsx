import Head from 'next/head';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = (props) => (
  <div>
    <Head>
      <title>Blogsite</title>
      <meta name="description" content="Created by Afx31" />
    </Head>
    <div className={`App`}>
      <Navbar
        civicLink={props.civicLink}
        wagoLink={props.wagoLink}
      />
      {props.children}
      <Footer />
    </div>
  </div>
);

export default Layout;