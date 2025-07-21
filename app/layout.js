import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const navLinks = {
  civic: 'civic-125',
  photography: 'photography-0',
  tech: 'tech-0',
}

export const metadata = {
  title: 'Afx31 ~ Blog',
  description: 'A blog by Afx31',
}


export default function RootLayout({ children }) {
  return (
    <html lang='en' className='darkmode'>
      <body>
        <Navbar
          carLink={navLinks.civic}
          photographyLink={navLinks.photography}
          techLink={navLinks.tech}
        />
          {children}
        <Footer />
      </body>
    </html>
  )
}