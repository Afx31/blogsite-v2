import NextLink from 'next/link';
import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { ThemeContext } from '../../lib/ThemeContext';

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useContext(ThemeContext);

  const darkModeBtn = (
    <div
      className={`${styles.themeBtnContainer} ${darkMode ? styles.themeBtnDarkmode : ''} ${darkMode ? styles.themeBtnActive : ''}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className={styles.themeBtnButton}>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className={styles.themeBtnIcon}>
          <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className={styles.themeBtnIcon}>
          <circle cx='12' cy='12' r='5'></circle><line x1='12' y1='1' x2='12' y2='3'></line><line x1='12' y1='21' x2='12' y2='23'></line><line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line><line x1='18.36' y1='18.36' x2='19.78' y2='19.78'>
            </line><line x1='1' y1='12' x2='3' y2='12'></line><line x1='21' y1='12' x2='23' y2='12'></line><line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line><line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
        </svg>
      </div>
    </div>
  )

  return (
    <>
      <div className={styles.coverImgContainer}></div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <NextLink href='/' >
              <div className={styles.navbarLogo}>
                <svg fill='#FFFFFF80' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32px' height='32px'>
                  <path d='M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z'/>
                </svg>
              </div>
            </NextLink>
          </li>
        </ul>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <NextLink href={{ pathname: `/post/${props.civicLink}` }}>
              Civic
            </NextLink>
          </li>
          <li className={styles.navbarItem}>
            <NextLink href={{ pathname: `/post/${props.wagoLink}` }}>
              Wago
            </NextLink>
          </li>
          <li className={styles.navbarItem}>
            <NextLink href={{ pathname: `/post/${props.frogoLink}` }}>
              Frogo
            </NextLink>
          </li>
          <li className={styles.navbarItem}>
            <NextLink href={{ pathname: `/post/${props.ef9Link}` }}>
              EF9
            </NextLink>
          </li>
        </ul>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItemThemebtn}>
            <div className={styles.navbarLink}>
              {darkModeBtn}
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;