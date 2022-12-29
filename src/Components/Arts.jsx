import React from 'react'
import {FiSearch} from 'react-icons/fi'
import Cards from '../Components/Cards'

const Arts = () => {
  return (
    <>
      <div className='text-[#fff] max-w-[1200px] mx-auto pt-[230px]'>
        <div className='flex justify-between'>
          <div>
            <h1 className=' font-Sora font-[700] text-[48px] '>Art in the collection</h1>
            <p className=' font-Sora font-[400] text-20px '>Browse a curated selection of art around the world, including <br /> museum exhibitions, gallery openings, upcoming and many <br /> more</p>
          </div>
          <div>
            <form className='flex relative top-0 left-0 mt-4 '>
              <label htmlFor="search">
                <span>
                  <FiSearch className='absolute top-3 left-3 text-[20px] text-[#FBAF00] ' />
                </span>
              </label>
              <input id='search' type="text" placeholder='Search' className='w-[400px] h-[46px] bg-[#1A1405] rounded-full pl-10 outline-none font-Sora font-[400] text-[20px] placeholder:text-[#FBAF00] ' />
            </form>
          </div>
        </div>
      </div>
      <Cards />
    </>
  )
}

export default Arts;