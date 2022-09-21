import React,{useState, createContext, useEffect} from 'react';
export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  // const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('darkMode') : '';
  // const initialTheme = storedTheme === 'darkmode' ? true : false;
  const initialTheme = true;
  const [darkMode, setDarkMode] = useState(initialTheme);

    useEffect(() => {
      localStorage.setItem('darkMode', darkMode ? 'darkmode' : 'lightmode')
    }, [darkMode]);

  return (
    <ThemeContext.Provider value={[darkMode, setDarkMode]}>
        {props.children}
    </ThemeContext.Provider>
  )
};