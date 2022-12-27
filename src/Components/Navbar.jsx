import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='w-screen py-4 text-white bg-[#110C00] z-40 fixed top-0 left-0'>
        <div className='flex  max-w-[1200px] mx-auto'>
          <div className='flex-1 mt-[13px]'>
            <Link to="/">
              <div className='inline-flex space-x-1  items-center'>
                <span>
                  <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.29046 21.9508L3.85315 24.0087C2.04667 26.5953 3.89726 30.145 7.05219 30.145H24.0923C27.081 30.145 28.9602 26.9225 27.4883 24.3213L20.3651 11.7332C18.951 9.23414 15.4132 9.06687 13.7696 11.4213L11.3677 14.8621M22.9796 16.1932L25.0668 7.62042C25.762 4.76497 23.1705 2.19497 20.3209 2.91393L4.95015 6.79205C2.13195 7.5031 1.0525 10.9352 2.95632 13.1314L5.61052 16.1932" stroke="white" strokeWidth="3.90203" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className=' font-Sora font-[700] text-[24px] '>Artisto</span>
              </div>
            </Link>
          </div>
          <ul className='flex items-center space-x-10 mt-[3px] '>
            <li className=' font-Sora font-[600] text-[16px]'>Events</li>
            <li className=' font-Sora font-[600] text-[16px]'>Museum</li>
            <li className=' font-Sora font-[600] text-[16px]'>Arts</li>
            <li className=' font-Sora font-[600] text-[16px]'>Gallaries</li>
            <div className='flex items-center space-x-8 '>
              <div className='relative top-0 left-0 group'>
                <div className=' flex items-center justify-center absolute bottom-1 right-1 bg-[#FBAF00] w-[164px] h-[61px] rounded-tr-[30px] rounded-bl-[30px] group-hover:bg-[#FFFFFF] transition-all '>
                  <p className=' font-Sora font-[600] text-[20px] group-hover:text-black '>Login</p>
                </div>
                <div className='bg-[#FFFFFF] w-[164px] h-[61px] rounded-tr-[30px] rounded-bl-[30px] group-hover:bg-[#FBAF00] transition-all'></div>
              </div>
              <div className='relative top-0 left-0 group'>
                <div className=' flex items-center justify-center absolute bottom-1 right-1 bg-[#FFFFFF] w-[164px] h-[61px] rounded-tr-[30px] rounded-bl-[30px] group-hover:bg-[#FBAF00] transition-all '>
                  <p className=' font-Sora font-[600] text-[20px] text-black group-hover:text-white '>Explore arts</p>
                </div>
                <div className='bg-[#FBAF00] w-[164px] h-[61px] rounded-tr-[30px] rounded-bl-[30px] group-hover:bg-[#FFFFFF] '></div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;