import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  wide, color, name, handleClick,
}) => {
<<<<<<< HEAD
  const classes = `${color} ${
=======
  const classes = `${color}  ${
>>>>>>> development
    wide ? 'fifty-percent' : 'twenty-five-percent'
  }`.trim();

  return (
    <button type="button" onClick={() => handleClick(name)} className={classes}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
  name: '',
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
<<<<<<< HEAD

=======
>>>>>>> development
export default Button;
