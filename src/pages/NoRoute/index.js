import React from 'react';

import './NoRoute.scss';

const NoRoute = () => (
  <div className="container">
    <p>
      ups{' '}
      <span role="img" aria-label="tricky">
        🤪
      </span>
      there is no page at this route
      <span role="img" aria-label="omg">
        {' '}
        🙀
      </span>
    </p>
  </div>
);

export default NoRoute;
