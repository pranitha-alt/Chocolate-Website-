import React from 'react'
import image1 from '../assets/image1.png'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import {useNavigate} from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div className='bg-pink-100 h-[120px] '>
        <Link to='/christmas'>
            <img src={image1} className='w-[190px] pl-[50px] pt-[30px]'/>
        </Link>
        <div className='pl-[500px] mt-[-40px] cursor-pointer'>Shop Mumbai<IoIosArrowDown className='ml-[113px] mt-[-18px]' /></div>
        <div className='pl-[650px] mt-[-22px] cursor-pointer' onClick={()=>navigate('/shop')}>Shop Other Cities<IoIosArrowDown className='ml-[125px] mt-[-18px]' /></div>
        <div className='pl-[820px] mt-[-22px]'>About Us<IoIosArrowDown className='ml-[70px] mt-[-18px]' /></div>
        <div className='pl-[930px] mt-[-22px] cursor-pointer' onClick={()=> navigate('/occasions')}>Occasions</div>
        <div className='pl-[1020px] mt-[-23px] cursor-pointer' onClick={()=>navigate('/gifting')}>Corporate Gifting</div>
        <div className='pl-[1160px] mt-[-23px]'>Biotiques & Cafe<IoIosArrowDown className='ml-[120px] mt-[-18px]' /></div>
        <div className='pl-[1310px] mt-[-23px] cursor-pointer' onClick={()=>navigate('/blog')}>Blog</div>
        </div>
        <button className='pl-[1380px]' onClick={()=>navigate('/login')}><HiMiniSquare3Stack3D className='mt-[-85px] size-6'/></button>
    </div>
  )
}

export default Header
