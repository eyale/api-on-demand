import React from 'react';

import { useTheme } from './ThemeProvider';
import './Theme.scss';

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="switch">
      <input
        type="checkbox"
        id="switch"
        checked={isDark}
        onChange={toggleTheme}
        aria-label="Switch between Dark and Light mode"
      />
      {/* eslint-disable-next-line */}
      <label htmlFor="switch">
        <span role="img" aria-label="aria-labelledby">
          🌙
        </span>
        <span role="img" aria-label="aria-labelledby">
          ☀️
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
