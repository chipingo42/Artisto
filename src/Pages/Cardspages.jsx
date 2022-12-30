import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import image from '../Assets/Frame11.png'
import groupLine from '../Assets/Group13.png'


const Cardspages = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='bg-[#110C00] w-full h-[930px] text-white relative top-0 left-0 '>
        <span className='absolute'>
          <svg className='h-[925px] w-[70%]' viewBox="0 0 1001 945" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_18_25)">
            <circle cx="187" cy="814" r="241" fill="#FBAF00"/>
            </g>
            <defs>
            <filter id="filter0_f_18_25" x="-626.199" y="0.801147" width="1626.4" height="1626.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="286.099" result="effect1_foregroundBlur_18_25"/>
            </filter>
            </defs>
          </svg>
        </span>
        <div className='max-w-[1200px] mx-auto '>
          <div className='flex justify-between'>
            <span className='mt-[205px]'>
              <Link to="/">
                <svg className='relative z-30' width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM43 9H1V7H43V9Z" fill="white"/>
                </svg>
                </Link>
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
          <div className='flex justify-center space-x-24 mt-[40px] '>
            <div>
              <img src={image} alt="/" className='h-[490px] w-[350px]' />
            </div>
            <div>
              <h1 className='font-Sora font-[800] text-[32px]'>Plastic Hears Sculpture</h1>
              <p className=' font-Sora font-[400] text-[20px] pt-[20px] '>Browse a curated selection of art around the world, including <br /> museum exhibitions, gallery openings, upcoming and many <br /> more. Browse a curated selection of art around the world, <br /> including museum exhibitions, gallery openings, upcoming <br /> and many moreBrowse a curated selection of art around the <br /> world, including museum exhibitions, gallery openings, <br /> upcoming and many more</p>
              <div className='flex items-center space-x-10 mt-[120px]'>
                <div className='relative top-0 left-0 group'>
                  <div className=' flex space-x-4 items-center justify-center absolute bottom-1 right-1 bg-[#ffffff] w-[200px] h-[61px] rounded-tr-[30px] rounded-bl-[30px] group-hover:bg-[#FBAF00] transition-all '>
                    <p className=' font-Sora font-[600] text-[20px] group-hover:text-black text-black '>Explore more</p>
                    <span>
                      <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM0 9H22V7H0V9Z" fill="#251A00"/>
                      </svg>
                    </span>
                  </div>
                  <div className='bg-[#FBAF00] w-[200px] h-[61px] rounded-tr-[30px] rounded-bl-[30px] group-hover:bg-[#ffffff] transition-all'></div>
                </div>
                <p className=' font-Sora font-[600] txt-[20px] '>Explore arts</p>
              </div>
            </div>
            
          </div>
        </div>
        <span className='absolute right-0 bottom-0'>
          <img src={groupLine} alt="/" className='h-[550px]' />
        </span>
      </div>
    </>
  )
}

export default Cardspages;