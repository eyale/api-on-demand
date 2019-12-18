import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const GridWrapper = ({ children }) => (
  <div className="container">
    <Grid>
      <Grid.Row centered>
        <Grid.Column largeScreen={6} mobile={16}>
          {children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

GridWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GridWrapper;
