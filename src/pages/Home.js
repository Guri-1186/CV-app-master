import React from 'react';
import { Link } from 'react-router-dom';
import PhotoBox from '../components/PhotoBox';
import avatar from '../assets/images/avatar.jpg';
import background from '../assets/images/background.png';

export default function Homepage() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
  };

  return (
    <main
      className=" flex h-screen items-center justify-center bg-cover bg-center"
      style={backgroundStyle}
    >
      <section>
        <PhotoBox
          name="Guranda Jikia"
          title="FrontEnd Developer"
          description="I am  a passionate and creative frontend developer with a strong foundation in HTML, CSS, and JavaScript. I excel at translating design concepts into responsive web applications that captivate users. My portfolio is a testament to my ability to bring ideas to life. I'm committed to continuous growth and am dedicated to enhancing my skills further"
          avatar={avatar}
        />

        <div className="mb-4 mt-4 flex items-center justify-center">
          <Link
            to="/Inner"
            className="h-10 w-28 rounded bg-[#222935] text-white transition duration-300 ease-in-out hover:bg-[#26C17E]"
          >
            <div className="p-2 text-center">Know more</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
