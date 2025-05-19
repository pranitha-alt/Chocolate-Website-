import React from 'react'
import image24 from '../assets/image24.png'
import image25 from '../assets/image25.png'
import image26 from '../assets/image26.png'
import {useNavigate} from 'react-router-dom'

const Blog = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className='tracking-widest font-semibold text-[40px] pl-[700px]'>BLOGS</h1>
      <img src={image24} className='h-[220px] translate-x-[230px] translate-y-[50px]' />
      <h2 className='border-2 border-pink-500 w-[330px] translate-y-[-170px] translate-x-[560px] h-[220px] text-center pt-[55px] text-[20px] tracking-wider text-blue-950'>CELEBRATE WORLD<br/> CHOCOLATE DAY WITH LA<br/> FOLIE</h2>
      <button className='border-0 w-[150px] h-[35px] translate-y-[-230px] translate-x-[650px] text-white bg-blue-950' onClick={()=>navigate('/chocolateday')}>READ MORE</button>
      <img src={image25}  className='h-[220px] translate-x-[230px] translate-y-[-100px] w-[330px]'/>
      <h2 className='border-2 border-pink-500 w-[330px] translate-y-[-320px] translate-x-[560px] h-[220px] text-center pt-[55px] text-[20px] tracking-wider text-blue-950'>DIFFERENT TYPES OF<br/> CHOCOLATE</h2>
      <button className='border-0 w-[150px] h-[35px] translate-y-[-380px] translate-x-[650px] text-white bg-blue-950' onClick={()=>navigate('/typesofchocolate')}>READ MORE</button>
      <img src={image26}  className='h-[220px] translate-x-[230px] translate-y-[-250px] w-[330px]'/>
      <h2 className='border-2 border-pink-500 w-[330px] translate-y-[-470px] translate-x-[560px] h-[220px] text-center pt-[55px] text-[20px] tracking-wider text-blue-950'>HOW TO MAKE CHOCOLATE?</h2>
      <button className='border-0 w-[150px] h-[35px] translate-y-[-530px] translate-x-[650px] text-white bg-blue-950' onClick={()=>navigate('/makechocolate')}>READ MORE</button>
    </div>
  )
}

export default Blog
