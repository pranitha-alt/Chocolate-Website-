import React from 'react'
import image11 from '../assets/image11.png'
import image12 from '../assets/image12.png'
import image13 from '../assets/image13.png'
import image14 from '../assets/image14.png'
import image15 from '../assets/image15.png'
import image16 from '../assets/image16.png'
import {Link} from 'react-router-dom'
import image17 from '../assets/image17.png'
import image18 from '../assets/image18.png'
import image19 from '../assets/image19.png'
import image20 from '../assets/image20.png'
import image21 from '../assets/image21.png'


const Newpage = () => {
  return (
    <>
      <img src={image11} className='size-[710px] w-[2000px] translate-y-[-24px]' />
      <div className=' text-[35px] font-bold tracking-widest translate-y-[-380px] pl-10'>OUR WINTER DELIGHTS</div>
      <button className='translate-y-[-350px] border-0 h-[50px] w-[170px] bg-white text-gray-500 translate-x-[180px] text-[22px] font-bold'>SHOP NOW</button>
      <img src={image12} className='translate-y-[-126px]' />
      <div className='bg-emerald-600 h-[500px] pt-7 translate-y-[-130px]'>
        <span className='text-[70px] text-white tracking-widest font-thin pl-[300px]'>DISCOVER</span>
        <span className='text-[70px] text-white font-semibold tracking-widest pl-[40px]'>COLLECTIONS</span>
        <Link><img src={image13} className='w-[250px]' /></Link>
        <Link><img src={image14} className='w-[250px] translate-x-[370px] translate-y-[-238px]' /></Link>
        <Link><img src={image15} className='w-[250px] translate-x-[750px] translate-y-[-478px]'/></Link>
        <Link><img src={image16} className='w-[250px] translate-x-[1120px] translate-y-[-728px]'/></Link>
      </div>
      <img src={image17} className='translate-y-[-130px]' />
      <Link><img src={image18} className='translate-y-[-130px]' /></Link>
      <img src={image19} className='translate-y-[-130px]' />
      <div className='border-0 w-[350px] h-[350px] translate-y-[-130px] bg-blue-950'>
      <h2 className='text-center pt-20 text-[20px] text-white'>Each of our products truly<br/> encapsulates the story of<br/> discovery of ethically<br/> sourced, fine flavoured and<br/> single origin cacao.</h2>
      <img src={image20} className='translate-x-[350px] translate-y-[-230px]'/>
      </div>
      <div className='border-0 w-[350px] h-[350px] translate-y-[-480px] translate-x-[700px] bg-blue-950'>
      <h2 className='text-center pt-20 text-[20px] text-white'>At our small-batch<br/> chocolate factory in<br/> Mumbai, we pair traditional<br/> expertise with modern<br/> innovation and technology.</h2>
      <img src={image21} className='translate-x-[350px] translate-y-[-230px]'/>
      </div>
    </>
  )
}

export default Newpage


