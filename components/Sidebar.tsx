import React from 'react'
import {AiFillGithub, AiFillYoutube} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi';
import {useTheme} from 'next-themes'
import Image from 'next/image';

const Sidebar = () => {

  const {theme, setTheme} = useTheme();

  const changeTheme = () => {
    setTheme(theme==='light' ? 'dark':'light');
  };

  return (
    <div className="filter drop-shadow-xl md:drop-shadow-xl">
      <Image 
      src="/images/profile.png" 
      alt="user avatar" 
      className="mx-auto rounded-full"
      layout='intrinsic'
      height='200px'
      width='280px'
      />
      <h3 className="my-4 text-2xl font-medium tracking-wider font-ubuntu">
      Andre Gonzales</h3>
      <p className="px-2 py-1 my-3 bg-gray-300 rounded-full dark:bg-dark-200 font-ubuntu">Computer Science Student</p>
      <a 
      href="https://www.uic.edu.ph" 
      className="flex items-center justify-center px-2 py-1 my-3 bg-gray-300 rounded-full dark:bg-dark-200 font-ubuntu"> 
       <GiTie className="w-5 h-5"/> UIC
        </a>
    {/* //social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-red-800 md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer"/>
        </a>

        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer"/>
        </a>
      </div>

    {/* //address */}
      <div 
      className="py-4 my-5 bg-gray-300 dark:bg-dark-200" 
      style={{marginLeft:'-1rem', marginRight:'-1rem   '}}> 
        <div className="flex items-center justify-center space-x-2 font-ubuntu">
          <GoLocation/>
          <span>Davao City</span>
        </div>
        <p className="my-2 font-ubuntu">test@gmail.com</p>
      </div>
      <button 
      onClick={changeTheme}
      className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-bluey to-red-800 focus:outline-none filter drop-shadow-xl md:drop-shadow-xl">
        Dark It</button>
    </div>
  )
}

export default Sidebar
