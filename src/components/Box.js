// components/Box.js

import React, { forwardRef } from 'react';

const Box = forwardRef(({ title, content, id }, ref) => {
  return (
    <div ref={ref} id={id} className="info-box mb-8">
      <h2 className="mb-4 text-2xl font-semibold text-green-500">{title}</h2>
      <p className="text-gray-700 sm:mr-5 sm:flex">{content}</p>
    </div>
  );
});
export default Box;
