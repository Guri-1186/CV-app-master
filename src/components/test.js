import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Address = forwardRef((props, ref) => {
  const emailAddress = 'anano.topuriaa@gmail.com';
  const phoneNumber = '(+995)555218953';
  const facebookLink = 'https://www.facebook.com/anano.topuria.92/';
  const instagramLink = 'https://www.instagram.com/ananotopuria/';

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="address text-gray-900 ">
      <div className="email mb-4 flex flex-col" onClick={handleEmailClick}>
        <span className="font-semibold  ">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-2xl text-[#26c17e]"
          />
          <span className="ml-3 text-[#222935]">Email:</span>
        </span>
        <a href={`mailto:${emailAddress}`} className=" ml-7 text-[#667081]">
          {emailAddress}
        </a>
      </div>
      <div className="phone mb-4 flex flex-col">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faPhone} className="text-2xl text-[#26c17e]" />
          <span className="ml-3 text-[#222935]">Phone:</span>
        </span>
        <a href={`tel:${phoneNumber}`} className="ml-7 text-[#667081]">
          {phoneNumber}
        </a>
      </div>
      <div className="facebook mb-4 flex flex-col">
        <span className="font-semibold">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-2xl text-[#26c17e]"
          />
          <span className="ml-3 text-[#222935]">Facebook:</span>
        </span>
        <a href={facebookLink} className="ml-7 text-[#667081]">
          {facebookLink}
        </a>
      </div>
      <div className="instagram mb-4 flex flex-col">
        <span className="font-semibold">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-2xl text-[#26c17e]"
          />
          <span className="ml-3 text-[#222935]">Instagram:</span>
        </span>
        <a href={instagramLink} className="ml-7 text-[#667081]">
          {instagramLink}
        </a>
      </div>
    </div>
  );
});

export default Address;
