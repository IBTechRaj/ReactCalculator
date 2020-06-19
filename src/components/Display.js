import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import './Display.css';
=======
>>>>>>> development

function Display({ result }) {
  return (
    <div className="result">
      <p>{result}</p>
    </div>
  );
}
Display.propTypes = {
  result: PropTypes.string.isRequired,
};
<<<<<<< HEAD

=======
>>>>>>> development
export default Display;
