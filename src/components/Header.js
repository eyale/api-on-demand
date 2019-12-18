import React from 'react';

import Logo from '../assets/Logo.svg';
import AccountInformation from './AccountInformation';
import ThemeSwitcher from './Theme/ThemeSwitcher';

const Header = () => (
  <header className="header">
    <div className="header-info">
      <div className="header-info__name">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <span>on demand</span>
      </div>
      <div className="header-info__account">
        <ThemeSwitcher />
        <AccountInformation />
      </div>
    </div>
  </header>
);

export default Header;
