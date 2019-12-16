import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, classNameBtn, text, onClick }) => (
  <a
    href={href}
    className={classNameBtn ? `${classNameBtn}` : ''}
    onClick={onClick}>
    {text}
  </a>
);

Link.defaultProps = {
  onClick: () => null,
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  classNameBtn: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default Link;
