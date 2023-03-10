import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import avater from '../Assets/Group7-down.png'



const Cards = () => {

  const [myData, setData] = useState([])

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
    .then(res => res.json())
    .then(data => {
      setData(data)
      // console.log(data)
    })
    .catch(err => err.message)
  }, []);



  return (
    <>
      <div className='text-white max-w-[1200px] mx-auto'>
        <div className='flex flex-wrap gap-7'>
          {
            myData?.data?.map((data_user, index) => (
              <Link to={`Detailspage/${data_user.id}`} key={index} className='w-[381px] min-h-[20px] mt-[56px] bg-[#1A1405] rounded-tl-[150px] rounded-br-[180px]'>
                <img className='rounded-tl-[150px] w-full h-[326px]' src={`https://www.artic.edu/iiif/2/${data_user.image_id}/full/200,/0/default.jpg`} alt="" />
                <div className='px-[10px] w-[320px] '>
                  <h1 className='font-Sora font-[800] text-[24px] pt-10'>{data_user.title}</h1>
                  <p className='font-Sora font-[400] text-[20px] pt-3'>{data_user.updated_at}</p>
                  <p className='font-Sora font-[400] text-[18px] pb-4 '>{data_user.artist_display}</p>
                </div>
              </Link>
            ))
          }
        </div>
        <div className='flex items-center justify-center mt-[130px]'>
          <div className='relative top-0 left-0 group'>
            <div className='flex space-x-4 items-center justify-center absolute bottom-1 right-1 bg-[#ffffff] w-[230px] h-[61px] rounded-tr-[30px] rounded-bl-[30px] group-hover:bg-[#FBAF00] transition-all '>
              <p className='font-Sora font-[600] text-[25.4438px] group-hover:text-black text-black'>Explore more</p>
              <span>
                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM0 9H22V7H0V9Z" fill="#251A00"/>
                </svg>
              </span>
            </div>
            <div className='bg-[#FBAF00] w-[230px] h-[61px] rounded-tr-[30px] rounded-bl-[30px] group-hover:bg-[#ffffff] transition-all'></div>
          </div>
        </div>
      </div>
      <div>
        <img src={avater} alt="/" className='mt-[-430px]' />
      </div>
    </>
  )
}

export default Cards;