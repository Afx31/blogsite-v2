import NextLink from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import styles from './Navbar.module.css';
// import prisma from '../../lib/prisma';
import { makeSerializable } from '../../lib/util';
import { ThemeContext } from '../../lib/ThemeContext';

const Navbar = (props) => {
  // const [darkMode, setDarkMode] = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(true);

  const darkModeBtn = (
    <div
      className={`${styles.themeBtnContainer} ${darkMode ? styles.themeBtnDarkmode : ''} ${darkMode ? styles.themeBtnActive : ''}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className='themeBtn-button'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-moon themeBtn-icon'>
          <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-sun themeBtn-icon'>
          <circle cx='12' cy='12' r='5'></circle><line x1='12' y1='1' x2='12' y2='3'></line><line x1='12' y1='21' x2='12' y2='23'></line><line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line><line x1='18.36' y1='18.36' x2='19.78' y2='19.78'>
            </line><line x1='1' y1='12' x2='3' y2='12'></line><line x1='21' y1='12' x2='23' y2='12'></line><line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line><line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
        </svg>
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.coverImgContainer}></div>
      <nav className={styles.navbar}>
        {/* <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button> */}
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <NextLink href='/' >
              <p>HOME</p>
            </NextLink>
          </li>
        </ul>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <NextLink href={`/p/${props.civicLink}`}>
              Civic
            </NextLink>
          </li>
          <li className={styles.navbarItem}>
            <NextLink href={`/p/${props.wagoLink}`}>
              Wago
            </NextLink>
          </li>
          <li className={styles.navbarItem}>
            <NextLink href={`/p/`}>
              Frogo
            </NextLink>
          </li>
          <li className={styles.navbarItem}>
            <NextLink href={`/p/`}>
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