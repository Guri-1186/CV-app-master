import React from 'react';

const PhotoBox = ({ name, title, description, avatar }) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5 rounded-full">
      <div className="mx-auto h-48 w-48 rounded-full pt-5">
        <img
          src={avatar}
          alt={name}
          className=" rounded-full border-2 border-white sm:h-10 sm:w-10 sm:items-start lg:h-48 lg:w-48 "
        />
      </div>
      <span>
        {' '}
        <h2 className=" lg:mr-50 lg:pl-30 sm:invisible lg:visible lg:text-center lg:text-2xl lg:font-semibold lg:text-white">
          {name}
        </h2>
      </span>
      <p className="text-center text-2xl text-white">{title}</p>
      <p className="w-1/2 text-center text-white">{description}</p>
    </div>
  );
};

export default PhotoBox;
