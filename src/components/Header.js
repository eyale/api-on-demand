import React from 'react';

import AccountInformation from './AccountInformation';

const Header = () => (
  <header className="header">
    <div className="header-info">
      <div className="header-info__name">
        <span>API on demand</span>
      </div>
      <div className="header-info__account">
        <AccountInformation />
      </div>
    </div>
  </header>
);

export default Header;
