import React from "react";
import PropTypes from "prop-types";

const NButton = ({ children, type }) => {
  return <button type={type}>{children}</button>;
};

NButton.propTypes = {
  children: PropTypes.element,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool.isRequired,
};

NButton.defaultProps = {
  type: "button",
};

export default NButton;
