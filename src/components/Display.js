import React from "react";

function Display({ result }) {
  return (
    <div className="result">
      <p>{result}</p>
    </div>
  );
}
Display.propTypes = {
  result: PropTypes.string.isRequired
};
export default Display;
