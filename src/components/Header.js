import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo.svg';
import AccountInformation from './AccountInformation';
import ThemeSwitcher from './Theme/ThemeSwitcher';

const Header = () => (
  <header className="header">
    <div className="header-info">
      <div className="header-info__name">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <span>on demand</span>
        </Link>
      </div>
      <div className="header-info__account">
        <ThemeSwitcher />
        <AccountInformation />
      </div>
    </div>
  </header>
);

export default Header;
