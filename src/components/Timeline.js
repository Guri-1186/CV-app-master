import React, { forwardRef } from 'react';

const Timeline = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} className="timeline h-[40vh] max-h-[80vh] overflow-auto">
      <ul className="timeline-list relative p-4">
        {data.map((event, index) => (
          <li className=" mb-5 flex  items-start" key={index}>
            <div className="timeline-date relative left-0 bg-[#EEE] p-4">
              {event.date}
            </div>
            <div className="timeline-event relative w-full">
              <div className="w-full bg-[#EEE] p-4">
                <h3 className="text-m mb-2 font-semibold">{event.title}</h3>
                <p>{event.text}</p>
              </div>
              {index !== data.length - 1 && (
                <div className="timeline-arrow after:border-top-2 after:border-bottom-2 after:border-right-2 after:absolute after:left-0 after:top-1/4 after:h-0 after:w-0 after:border-green-500 after:content-['']" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Timeline;
