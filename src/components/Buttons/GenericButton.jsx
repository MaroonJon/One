import React from 'react';
import PropTypes from 'prop-types';

function GenericButton({ className, fontSize, type, onClick, children }) {
  return (
    <button type={type} className={className} style={{ fontSize }} onClick={onClick}>
      {children}
    </button>
  );
}

GenericButton.propTypes = {
  className: PropTypes.string,
  fontSize: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

GenericButton.defaultProps = {
  type: 'button',
};

export default GenericButton;
