import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Dropdown } from 'semantic-ui-react';
import { getToken, clearUserInfo } from '../store/reducers/signUp/actions';

const AccountInformation = ({ clearUserInfo, signUp }) => {
  const handleLogout = e => {
    e.preventDefault();
    clearUserInfo();
  };
  const {
    decodedToken: { email },
    token,
  } = signUp;

  return token ? (
    <>
      <div className="header-user">
        <div className="header-user__title">
          <Icon name="bell outline" color="blue" />
          <span>
            <Icon name="user" color="blue" />
            <Dropdown text={email}>
              <Dropdown.Menu>
                <Dropdown.Item text="New" />
                <Dropdown.Divider />
                <Dropdown.Item text="logout" onClick={handleLogout} />
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </div>
      </div>
    </>
  ) : null;
};

AccountInformation.defaulProps = {
  signUp: {
    token: null,
    decodedToken: {},
  },
};
AccountInformation.propTypes = {
  clearUserInfo: PropTypes.func.isRequired,
  signUp: PropTypes.shape({
    token: PropTypes.object,
    decodedToken: PropTypes.shape({
      email: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = ({ signUp }) => ({ signUp });

const mapDispatchToProps = {
  getToken,
  clearUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountInformation);
