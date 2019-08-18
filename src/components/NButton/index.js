import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const NButton = ({ children, type }) => {
  const [counter, setCounter] = useState(5000);
  const [isTicking, setIsTicking] = useState(false);

  useEffect(() => {
    console.log("tick");
    isTicking && setupTick();
  }, [counter, isTicking]);

  let to;
  const setupTick = () => {
    if (counter > 0) {
      to = setTimeout(() => {
        setCounter(c => c - 1000);
      }, 1000);
    }
    return () => {
      window.clearTimeout(to);
      return false;
    };
  };

  const handleClick = () => {
    setIsTicking(b => {
      if (b) {
        window.clearTimeout(to);
        to = null;
      }
      return !b;
    });
  };
  return (
    <button type={type} onClick={handleClick}>
      {children} CNT: {counter}
    </button>
  );
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
