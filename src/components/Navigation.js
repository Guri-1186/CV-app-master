import React, { useState, useEffect } from 'react';
import PhotoBox from './PhotoBox';
import avatar from '../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGraduationCap,
  faPen,
  faGem,
  faBriefcase,
  faLocationArrow,
  faChevronLeft,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

const Navigation = ({
  aboutMeRef,
  educationRef,
  experienceRef,
  portfolioRef,
  contactsRef,
  feedbackRef,
}) => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  const handleToggleMenu = () => {
    console.log(isMenuHidden);
    setIsMenuHidden(!isMenuHidden);
  };

  const handleSectionClick = (ref, sectionName) => {
    console.log(`Clicked on section: ${sectionName}`);
    console.log('ref:', ref);
    if (ref.current) {
      console.log(`Scrolling to section: ${sectionName}`);
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = [
        'aboutMe',
        'education',
        'experience',
        'portfolio',
        'contacts',
        'feedback',
      ];

      for (const section of sectionElements) {
        const element = document.getElementById(section);
        if (
          element &&
          element.getBoundingClientRect().top < window.innerHeight / 2
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="relative">
      <button
        className={` absolute right-[-2rem] top-5 mr-3 flex rounded bg-gray-800 p-1 text-white ${
          isMenuHidden ? 'block' : ''
        }`}
        onClick={handleToggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={`relative h-full bg-[#222935] p-4 text-white sm:w-20 lg:w-64 ${
          isMenuHidden ? 'hidden' : 'menuOpen' ? 'w-72' : 'w-20'
        }`}
      >
        <PhotoBox name="Guranda Jikia" avatar={avatar} />

        <ul
          className={`navigation  space-y-2   ${isMenuHidden ? 'hidden' : ''}`}
        >
          <li
            className="hover-text-green-500 active-text-green-500 lg:text-md flex cursor-pointer items-center"
            onClick={() => handleSectionClick(aboutMeRef, 'aboutMe')}
          >
            <span className="icon min-w-8 mr-4 inline-block">
              <FontAwesomeIcon icon={faUser} />
            </span>{' '}
            <span className="sm:invisible lg:visible">About Me</span>
          </li>
          <li
            className="flex cursor-pointer items-center hover:text-green-500 active:text-green-500"
            onClick={() => handleSectionClick(educationRef, 'education')}
          >
            <span className="icon min-w-8 mr-4 inline-block">
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>{' '}
            <span className="sm:invisible lg:visible">Education</span>
          </li>
          <li
            className="flex cursor-pointer items-center hover:text-green-500 active:text-green-500"
            onClick={() => handleSectionClick(experienceRef, 'experience')}
          >
            <span className="icon min-w-8 mr-4 inline-block">
              <FontAwesomeIcon icon={faPen} />
            </span>{' '}
            <span className="sm:invisible lg:visible">Experience</span>
          </li>
          <li
            className="flex cursor-pointer items-center hover:text-green-500 active:text-green-500"
            onClick={() => handleSectionClick(portfolioRef, 'portfolio')}
          >
            <span className="icon min-w-8 mr-4 inline-block">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>{' '}
            <span className="sm:invisible lg:visible">Portfolio</span>
          </li>
          <li
            className="flex cursor-pointer items-center hover:text-green-500 active:text-green-500"
            onClick={() => handleSectionClick(contactsRef, 'contacts')}
          >
            <span className="icon min-w-8 mr-4 inline-block">
              <FontAwesomeIcon icon={faLocationArrow} />
            </span>{' '}
            <span className="sm:invisible lg:visible">Contacts</span>
          </li>
          <li
            className="flex cursor-pointer items-center hover:text-green-500 active:text-green-500"
            onClick={() => handleSectionClick(feedbackRef, 'feedback')}
          >
            <span className="icon min-w-8 mr-4 inline-block">
              <FontAwesomeIcon icon={faLocationArrow} />
            </span>{' '}
            <span className="sm:invisible lg:visible">feedback</span>
          </li>

          <li className="absolute bottom-5 cursor-pointer sm:hidden">
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} /> Go back
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
