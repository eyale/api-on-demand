import React from 'react';
// import { Button, Form, Message } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import uuid from 'uuid';

import './MainView.scss';

const MainView = () => {
  const darktheme = {};
  const sampleObject = {
    key: 'val',
  };
  const id = uuid();

  return (
    <div className="Wrapper">
      <JSONInput
        id={id}
        placeholder={sampleObject}
        colors={darktheme}
        locale={locale}
        height="640px"
      />
    </div>
  );
};

MainView.defaultProps = {};

MainView.propTypes = {
  // loading: PropTypes.bool.isRequired,
};
export default MainView;
