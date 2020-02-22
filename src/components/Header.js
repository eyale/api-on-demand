import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Logo from '../assets/Logo.svg';
import AccountInformation from './AccountInformation';
import ThemeSwitcher from './Theme/ThemeSwitcher';

import { clearUserInfo } from '../store/reducers/signUp/actions';

const Header = ({ clearUserInfo, history, signUp }) => {
  const handleClickLogout = () => {
    clearUserInfo();
    history.push('/');
  };
  const isLoggedIn = !!signUp.data; // TODO: change the rule;

  return (
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
        {isLoggedIn && (
          <Button
            onClick={handleClickLogout}
            size="small"
            type="submit"
            content="Logout"
          />
        )}
      </div>
    </header>
  );
};

const mapStateToProps = ({ signUp }) => ({ signUp });

const mapDispatchToProps = {
  clearUserInfo,
};

Header.propTypes = {
  history: PropTypes.object.isRequired,
  signUp: PropTypes.object.isRequired,
  clearUserInfo: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
