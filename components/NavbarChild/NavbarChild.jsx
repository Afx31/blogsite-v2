import './NavbarChild.css';
import NextLink from 'next/link';
// import React, { useContext } from 'react';
// import { ThemeContext } from '../../lib/ThemeContext';

export default function NavbarChild(params) {
  // const [darkMode, setDarkMode] = useContext(ThemeContext);

  // const darkModeBtn = (
  //   <div
  //     className=`${'themeBtnContainer' ${darkMode ? 'themeBtnDarkmode' : ''} ${darkMode ? 'themeBtnActive' : ''}`}
  //     onClick={() => setDarkMode(!darkMode)}
  //   >
  //     <div className='themeBtnButton'>
  //       <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='themeBtnIcon'}>
  //         <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
  //       </svg>
  //       <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='themeBtnIcon'}>
  //         <circle cx='12' cy='12' r='5'></circle><line x1='12' y1='1' x2='12' y2='3'></line><line x1='12' y1='21' x2='12' y2='23'></line><line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line><line x1='18.36' y1='18.36' x2='19.78' y2='19.78'>
  //           </line><line x1='1' y1='12' x2='3' y2='12'></line><line x1='21' y1='12' x2='23' y2='12'></line><line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line><line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
  //       </svg>
  //     </div>
  //   </div>
  // )

  return (
    <>
      <nav className='navbarchild'>
        <ul className='navbarchild-List'>
          <li className='navbarchild-Item'>
            <NextLink href={{ pathname: `/cars/civic/${params.civicLink}` }}>
              Civic
            </NextLink>
          </li>
          <li className='navbarchild-Item'>
            <NextLink href={{ pathname: `/cars/wago/${params.wagoLink}` }}>
              Wago
            </NextLink>
          </li>
          <li className='navbarchild-Item'>
            <NextLink href={{ pathname: `/cars/frogo/${params.frogoLink}` }}>
              Frogo
            </NextLink>
          </li>
          <li className='navbarchild-Item'>
            <NextLink href={{ pathname: `/cars/ef9/${params.ef9Link}` }}>
              EF9
            </NextLink>
          </li>
        </ul>
      </nav>
    </>
  );
}