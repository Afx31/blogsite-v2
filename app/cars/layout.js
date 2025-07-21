import './globals.css';
import NavbarChild from '../../components/NavbarChild/NavbarChild'

// Just gonna update the below to latest each time, for now..
const navChildLinks = {
  civic: 'civic-125',
  wago: 'wago-35',
  frogo: 'frogo-1',
  ef9: 'ef9-11'
}

export default function RootLayout({ children }) {
  return (
    <>
    <NavbarChild
      civicLink={navChildLinks.civic}
      wagoLink={navChildLinks.wago}
      frogoLink={navChildLinks.frogo}
      ef9Link={navChildLinks.ef9}
    />
      {children}
    </>
  )
}