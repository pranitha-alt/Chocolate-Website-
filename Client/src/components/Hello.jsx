import React from 'react'
import image2 from '../assets/image2.png'
import {Link} from 'react-router-dom'
import image3 from '../assets/image3.png'


const Hello = () => {
  return (
    <div>
      <img src={image2} className='translate-y-[-25px]' />
      <div>
        <Link to='/hi' className='font-thin pl-[300px] text-[13px]'>Home</Link>
        <span className='font-thin pl-[10px] text-[13px]'>/</span>
        <span className='font-thin pl-[10px] text-[13px]'>Chocolate Bars</span>
      </div>
      <div className='relative'>
        <img src={image3} className='h-[400px] pl-[310px] translate-y-10'/>
      </div>
    </div>
  )
}

export default Hello