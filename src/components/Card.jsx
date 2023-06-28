import React, { useState } from 'react'
import {FaPlayCircle} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiHeart} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

function Card({item}) {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='relative rounded-md cursor-pointer' onClick={()=>{navigate('/watch/'+item.id)}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} >
      <img className='w-[225px] h-[140px] object-cover rounded-md' src={item.image} alt="" />
      {isHovered && (<div className=' w-[300px] absolute bottom-0 z-[5] text-white bg-slate-800 rounded-md'>
        <img className='w-[300px] h-[180px] object-cover rounded-t-md' src={item.image} alt="" />
        <div className='p-4'>
          <p className=''>{item.title}</p>
          <div className='flex text-4xl gap-3 py-4'>
            <FaPlayCircle />
            <AiOutlinePlus className='rounded-full text-4xl border-[2px] p-1' />
            <BiHeart className='rounded-full text-4xl border-[2px] p-1' />
            
          </div>
        </div>
      </div>) }
    </div>
  )
}

export default Card