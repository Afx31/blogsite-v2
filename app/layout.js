import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// import { Inter } from '/next/font/google';
// const inter = Inter({ subsets: ['latin'] });

// Just gonna update the below to latest each time, for now...
const navLinks = {
  civic: 'civic-1',
  wago: 'wago-1',
  frogo: 'frogo-1',
  ef9: 'ef9-1'
}

export const metadata = {
  title: 'Afx31 ~ Blog',
  description: 'A blog by Afx31',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Navbar
        civicLink={navLinks.civic}
        wagoLink={navLinks.wago}
        frogoLink={navLinks.frogo}
        ef9Link={navLinks.ef9}
      />
      {/* <body className={inter.className}>{children}</body> */}
      {children}
      <Footer />
    </html>
  );
}
