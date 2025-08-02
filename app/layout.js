import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// Just gonna update the below to latest each time, for now..
const navLinks = {
  civic: 'civic-125',
  wago: 'wago-35',
  frogo: 'frogo-1',
  ef9: 'ef9-11'
}

export const metadata = {
  title: 'Afx31 ~ Blog',
  description: 'A blog by Afx31',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='darkmode'>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        <Navbar
          // civicLink={navLinks.civic}
          wagoLink={navLinks.wago}
          frogoLink={navLinks.frogo}
          ef9Link={navLinks.ef9}
        />
          {children}
        <Footer />
      </body>
    </html>
  );
}