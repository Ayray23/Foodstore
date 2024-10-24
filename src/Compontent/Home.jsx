import React from 'react'
import { useEffect,useState } from 'react'
const Home = () => {
        const [darkMode, setDarkMode] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="flex min-h-screen flex-col p-12 dark:text-white text-black bg-white dark:bg-neutral-900">
      <nav
      className={`fixed top-0 bg-gray-700 left-0 w-full z-50 flex justify-between text-black ${
        isSticky ? "bg-slate-700 text-black" : "bg-transparent text-black"
      }`}
      style={{ transition: "background-color 0.3s" }}
    >
          <h1 className="text-xl font-semibold dark:text-white">
            Raymond
          </h1>

          <button
          className=" w-10 h-10 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
          onClick={toggleDarkMode}
        >
          {darkMode ? "LHT" : "DRK"}
        </button>
          <ul className="flex dark:text-white gap-10 pr-10">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
          
        </nav>
        <>
        <section className='flex flex-col'>
<div className="flex flex-col  text-black dark:text-white items-center">
  <h2 className="text-1xl">
    What i offer
  </h2>
  <h1 className="text-3xl font-bold">
    My services
  </h1>
  <p>
    I am a frontend developer from Nigeria with ___ years of experience
  </p>
</div>
<div className="flex md:flex-row flex-col dark:text-white justify-center gap-4 mt-10 ">
  <div className='border-2 border-black dark:border-white h-[250px] hover:bg-slate-700 hover:shadow-lg hover:shadow-white text-center  p-4 w-[400px] md:w-[300px]   '>
      {/* <AiOutlineGlobal  className='text-3xl my-4 mx-28 '/> */}
      <h2 className='text-2xl'>Web design</h2>
      <p className=''>Web development is the process of building,programming ...</p>
      <h2 className="flex  justify-center items-center pt-12 gap-2 ">
      Read more
      {/* < FaLongArrowAltRight className='text-4xl pl-2' /> */}
      </h2>
  </div>
  <div className='border-2 h-[250px] hover:bg-slate-700 hover:shadow-lg hover:shadow-white text-center  p-4 w-[400px] md:w-[300px]  border-white '>
      {/* <IoLogoAndroid  className='text-3xl my-4 mx-28 '/> */}
      <h2 className='text-2xl'>Mobile Appps</h2>
      <p className=''>Web development is the process of building,programming ...</p>
      <h2 className="flex justify-center items-center pt-12 gap-2 ">
      Read more
      {/* < FaLongArrowAltRight className='text-4xl pl-2' /> */}
      </h2>
  </div>
  <div className='border-2 h-[250px] hover:bg-slate-700 hover:shadow-lg hover:shadow-white text-center  p-4 w-[400px] md:w-[300px]  border-white '>
      {/* <AiOutlineGlobal  className='text-3xl my-4 mx-28 '/> */}
      <h2 className='text-2xl'>Web design</h2>
      <p className=''>Web development is the process of building,programming ...</p>
      <h2 className="flex  justify-center items-center pt-12 gap-2 ">
      Read more
      {/* < FaLongArrowAltRight className='text-4xl pl-2' /> */}
      </h2>
  </div>
  <div className='border-2 h-[250px] hover:bg-slate-700 hover:shadow-lg hover:shadow-white text-center  p-4 w-[400px] md:w-[300px]  border-white '>
      {/* <IoLogoAndroid  className='text-3xl my-4 mx-28 '/> */}
      <h2 className='text-2xl'>Mobile Appps</h2>
      <p className=''>Web development is the process of building,programming ...</p>
      <h2 className="flex justify-center  items-center pt-12 gap-2 ">
      Read more
      {/* < FaLongArrowAltRight className='text-4xl pl-2' /> */}
      </h2>
  </div>
 
</div>
</section>

<section className='flex m-12 md:flex-row flex-col text-black dark:text-white'>
        <div className='md:w-[40%] mt-20'>
          {/* <img src={Logo} alt="" /> */}
        </div>
        <div className='md:mt-0 mt-8 md:w-[60%] flex flex-col  items-center'>
          <h5 className='text-xl'>
            Introduction
          </h5>
          <h1 className='text-3xl'>
            About me
          </h1>
          <p className='mt-8 mx-16 font-serif font-medium'>
            I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </p>
          <div className='flex md:flex-row flex-col md:items-center mt-6  md:justify-center gap-8'>
            <div className='border-2 h-[200px] hover:shadow-lg hover:shadow-white text-center  p-4 w-[400px] md:w-[200px]  dark:border-white border-black '>
              {/* <PiPentagramBold className='text-3xl md:ml-16 ml-40' /> */}
              <h2 className='text-2xl'>Languages</h2>
              <p className=''>HTML,CSS, <md:br />JavaScript, <br />React Js, <md:br />Vite</p>
            </div>
            <div className='border-2 hover:shadow-lg hover:shadow-white  h-[200px] text-center p-4 w-[400px]  md:w-[200px]  border-white '>
              {/* <FaGraduationCap className='text-3xl md:ml-16 ml-40' /> */}
              <h2 className='text-2xl'>Education</h2>
              <p>B.Tech in <md:br /> Software <md:br /> Engineering</p>
            </div>
            <div className='border-2 h-[200px] hover:shadow-lg hover:shadow-white  text-center p-4 w-[400px] md:w-[200px] border-white '>
              {/* <FaBriefcase className='text-3xl md:ml-16 ml-40' /> */}
              <h2 className='text-2xl mb-1'>Project</h2>
              <p>Built more than <md:br /> 2 projects </p>
            </div>
          </div>
        <div>

        </div>
        </div>
      </section>
        </>
      </main>
    </div>
  );
  }

export default Home


{/* {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-blue-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))} */}

              {/* {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="hover:text-blue-500">
                {link.name}
              </a>
            </li>
          ))} */}
             // const links = [
  //   { name: "Home", url: "#home" },
  //   { name: "About", url: "#about" },
  //   { name: "Skills", url: "#skills" },
  //   { name: "Projects", url: "#projects" },
  //   { name: "Contact", url: "#contact" },
  // ];