import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// import { Inter } from '/next/font/google';
// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Afx31 ~ Blog',
  description: 'A blog by Afx31',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Navbar 
        civicLink="test1"
        wagoLink="test"
        frogoLink=""
        ef9Link=""
      />
      {/* <body className={inter.className}>{children}</body> */}
      {children}
      <Footer />
    </html>
  );
}
