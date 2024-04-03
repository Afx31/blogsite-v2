// import React, {useState, useEffect, createContext} from 'react';
// export const ThemeContext = createContext();

// export const ThemeProvider = (props) => {
//   const [darkMode, setDarkMode] = useState(true);
//   const [firstload, setfirstload] = useState(true);

//   useEffect(() => {
//     if (typeof window !== 'undefined' && localStorage.getItem('theme'))
//     {
//       const storedTheme = localStorage.getItem('theme');
//       setDarkMode(storedTheme === 'darkmode');
//     }
//   }, [])

//   useEffect(() => {
//     if (!firstload)
//       localStorage.setItem('theme', darkMode ? 'darkmode' : 'lightmode');
//     setfirstload(false);
//   }, [darkMode])

//   return (
//     <ThemeContext.Provider value={[darkMode, setDarkMode]}>
//         {props.children}
//     </ThemeContext.Provider>
//   )
// }