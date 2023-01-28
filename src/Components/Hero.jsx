import React from 'react'
import avater from '../Assets/Group8.png'
import image from '../Assets/desktop.png'
import image2 from '../Assets/Frame12.png'

const Hero = () => {
  return (
    <>
      <div className='text-[#fff] max-w-[1200px] mx-auto'>
        <div className='flex justify-between pb-[179px]'>
          <div className='pt-[213px] '>
            <h1 className='font-[700] text-[68px] leading-[72px] '>Discover amazing <br /> art around the <br /> <span className='text-[#FBAF00]'>world</span> </h1>
            <p className='pt-[45px] font-Sora font-[400] text-[20px] '>Browse a curated selection of art around the world, <br /> including museum exhibitions, gallery openings, <br /> upcoming and many more</p>
            <div className='flex items-center relative left-0'>
              <div className='relative top-0 left-0 mt-[67px] group transition-all '>
                <div className='flex justify-center items-center relative z-10 bg-[#FFFFFF] w-[208px] h-[77px] rounded-tr-[30px] rounded-bl-[30px] group-hover:bg-[#FBAF00] '>
                  <p className=' font-Sora font-[600] text-[20px] text-[#251A00] '>Explore arts</p>
                </div>
                <div className='absolute left-2 top-1 bg-[#FBAF00] w-[208px] h-[77px] rounded-tr-[30px] rounded-bl-[30px] group-hover:bg-[#ffffff] '></div>
              </div>
              <div>
                <span className='absolute top-[160px] right-4'>
                  <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.561049 29.6131C0.56132 29.5977 0.574281 29.5854 0.589706 29.5856C15.9621 29.8246 27.1145 15.021 22.6437 0.311073C22.6392 0.296308 22.6474 0.280456 22.6622 0.275943V0.275943C22.6769 0.271431 22.6926 0.279963 22.6972 0.294711C27.2202 14.9886 44.7456 21.0205 57.354 12.2229C57.3667 12.2141 57.3843 12.217 57.3931 12.2297V12.2297C57.402 12.2423 57.3987 12.2599 57.3861 12.2687C44.8091 21.1111 44.488 39.6427 56.7512 48.9154C56.7635 48.9247 56.7662 48.9424 56.7569 48.9547V48.9547C56.7476 48.967 56.7299 48.9693 56.7176 48.9601C44.4215 39.731 26.6977 45.1523 21.6684 59.6807C21.6633 59.6952 21.6474 59.7032 21.6328 59.6982V59.6982C21.6182 59.6932 21.6105 59.6771 21.6155 59.6625C26.5931 45.1163 15.9602 29.9352 0.588736 29.6416C0.573308 29.6413 0.560778 29.6285 0.561049 29.6131V29.6131Z" fill="white"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className='mt-[213px]'>
            <img className=' absolute top-[300px] right-0 z-[1] h-[610px] ' src={avater} alt="/" />
            <div className='relative top-7 left-0'>
              <div  className='relative bg-[#FBAF00] rounded-tr-[200px] rounded-bl-[200px] rounded-tl-[20px] rounded-br-[20px] w-[448px] h-[566px] z-[2]  '></div>
              <img src={image} alt="/" className='absolute bottom-5 right-5 z-10  rounded-tr-[200px] rounded-bl-[200px] rounded-tl-[20px] rounded-br-[20px]' />
              <img src={image2} alt="/" className='absolute top-0 left-[-70px] z-20 ' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;