import React, { useState, useEffect, useContext } from 'react';

import PropTypes from 'prop-types';

const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
});

// Can only be used within the ThemeContext provider
const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// A custom hook to add ".dark" class to the the body
//  element if the persisted mode on localStorage is dark.
const useDarkThemeEffect = () => {
  const [themeState, setThemeState] = useState({
    isDark: false,
    hasThemeLoaded: false,
  });

  useEffect(() => {
    const lsDark = localStorage.getItem('isDark') === 'true';

    if (lsDark) {
      document.querySelector('body').classList.add('dark');
    }
    setThemeState({
      ...themeState,
      isDark: lsDark,
      hasThemeLoaded: true,
    });
  }, []);

  return { themeState, setThemeState };
};

const ThemeProvider = ({ children }) => {
  const { themeState, setThemeState } = useDarkThemeEffect();

  // Render <div /> if the mode is not loaded yet
  // to avoid rendering in light mode by default
  if (!themeState.hasThemeLoaded) return <div />;

  // Add or remove ".dark" class from the body element
  // when a user toggles the switch
  const toggleTheme = () => {
    const isDark = !themeState.isDark;

    localStorage.setItem('isDark', JSON.stringify(isDark));
    const bodyEl = document.querySelector('body');

    if (isDark) {
      bodyEl.classList.add('dark');
    } else {
      bodyEl.classList.remove('dark');
    }
    setThemeState({ ...themeState, isDark });
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark: themeState.isDark,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { ThemeProvider, useTheme };
