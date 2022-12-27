import React from 'react'
import Navbar from '../Components/Navbar'


const Cardspages = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='bg-[#110C00] w-full h-screen text-white '>
        <div className='max-w-[1200px] mx-auto'>
          <div className='flex justify-between'>
            <span className='mt-[205px]'>
              <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM43 9H1V7H43V9Z" fill="white"/>
              </svg>
            </span>
            <span className='mt-[205px]'>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_18_17)">
                <path d="M8.75 21.875C11.1662 21.875 13.125 19.9162 13.125 17.5C13.125 15.0838 11.1662 13.125 8.75 13.125C6.33375 13.125 4.375 15.0838 4.375 17.5C4.375 19.9162 6.33375 21.875 8.75 21.875Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26.25 13.125C28.6662 13.125 30.625 11.1662 30.625 8.75C30.625 6.33375 28.6662 4.375 26.25 4.375C23.8338 4.375 21.875 6.33375 21.875 8.75C21.875 11.1662 23.8338 13.125 26.25 13.125Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26.25 30.625C28.6662 30.625 30.625 28.6662 30.625 26.25C30.625 23.8338 28.6662 21.875 26.25 21.875C23.8338 21.875 21.875 23.8338 21.875 26.25C21.875 28.6662 23.8338 30.625 26.25 30.625Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.6875 15.6042L22.3125 10.6458" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.6875 19.3958L22.3125 24.3542" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_18_17">
                <rect width="35" height="35" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className='flex justify-around'>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cardspages