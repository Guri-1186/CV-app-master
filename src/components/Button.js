import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ icon, text }) => {
  return (
    <button className=" flex cursor-pointer items-center gap-2 rounded-md bg-gray-800 p-2 text-white hover:bg-green-500 hover:text-black">
      {icon}
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
