import { Dimmer, Loader } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

const DimmerLoader = ({ active }) => {
  return (
    <Dimmer active={active} inverted>
      <Loader />
    </Dimmer>
  );
};

DimmerLoader.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default DimmerLoader;
