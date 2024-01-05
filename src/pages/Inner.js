import React, { useRef } from 'react';
import Navigation from '../components/Navigation';
import Box from '../components/Box';
import Timeline from '../components/Timeline';
import Expertise from '../components/Expertise';
import Portfolio from '../components/Portfolio';
import Address from '../components/Address';
import Feedback from '../components/Feedback';
import userimage from '../assets/images/userimage.png';
import Skills from '../components/Skills/Skills';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Inner() {
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactsRef = useRef(null);
  const feedbackRef = useRef(null);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative flex">
      <Navigation
        aboutMeRef={aboutMeRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        portfolioRef={portfolioRef}
        contactsRef={contactsRef}
        feedbackRef={feedbackRef}
      />
      <div className="ml-2 mt-8 p-4">
        <Box
          title="About me"
          content=" I am Guranda Jikia, a front-end developer. My journey into the world of web development has been driven by my unwavering dedication to learning and self-improvement. Although I initially pursued other professions, I discovered that my true passion lies in web development. I find immense joy and fulfillment in this field, and I'm determined to excel and succeed as a developer.

        Web development isn't just a job for me; it's a calling. I'm here to continually grow, innovate, and make a meaningful impact in this ever-evolving industry. Join me on this exciting path of exploration and growth in the world of web development."
          id="aboutMe"
          ref={aboutMeRef}
        />

        <h2 className="mb-4 mt-4  font-semibold text-green-500 first-line:text-2xl">
          Education
        </h2>
        <Timeline
          id="education"
          ref={educationRef}
          data={[
            {
              date: 2003,
              title: 'University',
              text: 'Tbilisi State Medical University (MD)',
            },
            {
              date: 2009,
              title: 'University',
              text: 'International public health school (MPH) ',
            },
            {
              date: 2023,
              title: 'Learn Digital Platform - EPAM',
              text: 'EPAM',
            },
          ]}
        />
        <h2 className="mb-4 mt-4  font-semibold text-green-500 first-line:text-2xl">
          Experience
        </h2>
        <Expertise
          id="experience"
          ref={experienceRef}
          data={[
            {
              date: '2014 – 2022',
              info: {
                company: 'GHRN',
                job: 'M@E Specialist',
                description:
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
              },
            },
            {
              date: '2023',
              info: {
                company: 'Google',
                job: 'Front-End Developer',
                description:
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
              },
            },
          ]}
        />
        <Skills />
        <h2 className="mb-4 mt-4 font-bold text-green-500 first-line:text-2xl">
          Portfolio
        </h2>
        <Portfolio id="portfolio" ref={portfolioRef} />
        <h2 className="mb-4 mt-4 font-bold text-green-500 first-line:text-2xl">
          Contacts
        </h2>
        <Address id="contacts" ref={contactsRef} />
        <h2 className="mb-4 mt-4 font-bold text-green-500 first-line:text-2xl">
          Feedback
        </h2>
        <Feedback
          data={[
            {
              feedback:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  ',
              reporter: {
                photoUrl: userimage,
                name: 'John Doe Programer',
                citeUrl: 'https://www.citeexample.com',
              },
            },
            {
              feedback:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  ',
              reporter: {
                photoUrl: userimage,
                name: 'John Doe Programer',
                citeUrl: 'https://www.citeexample.com',
              },
            },
          ]}
          id="feedback"
          ref={feedbackRef}
        />
      </div>

      <button
        className=" fixed bottom-0 right-20   rounded bg-[#222935] p-1 text-white"
        onClick={handleBackToTop}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </div>
  );
}
