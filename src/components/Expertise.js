import React, { forwardRef } from 'react';

const Expertise = forwardRef(({ data }, ref) => {
  return (
    <div className="expertise mt-10" ref={ref}>
      <ul className="expertise-list">
        {data.map((item, index) => (
          <li key={index} className="mb-10 flex items-start">
            <div className="mr-4 w-40 text-gray-600">
              <span className="text-base text-gray-700">{item.date}</span>
              <div className="mb-2 text-lg font-semibold">
                {item.info.company}
              </div>
            </div>
            <div className="expertise-info">
              <div className="text-md">{item.info.job}</div>
              <p className="text-gray-700">{item.info.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Expertise;
