import React, { useState } from 'react'
import Card from './Card'
import {BiChevronsRight, BiChevronsLeft} from 'react-icons/bi'

function CardList({items, title}) {

  const [sliderPos, setSliderPos] = useState(0)  
  function handleClick(direction){
    let i;
    if(direction==='left'){
        if(sliderPos===0) return
        i=1;
    } 
    else {
        if(sliderPos===-4) return
        i=-1;
    }
    setSliderPos(sliderPos+i);
  }
  return (
    <div className=''>
        <h1 className='text-xl font-semibold text-white mb-1'>{title}</h1>
        <div 
          className='cursor-pointer absolute left-0 text-white z-[5] w-[60px] h-[140px] bg-slate-700 opacity-50 flex justify-center items-center text-4xl hover:opacity-100'
          onClick={()=>handleClick('left')}
          >
            <BiChevronsLeft />
        </div>
        <div 
          className='cursor-pointer absolute right-0 text-white z-[5] w-[60px] h-[140px] bg-slate-700 opacity-50 flex justify-center items-center text-4xl hover:opacity-100'
          onClick={()=>handleClick('right')}
          >
            <BiChevronsRight />
        </div>
        <div className='flex flex-nowrap gap-2 w-[200vw] relative transition-all duration-100' style={{left:sliderPos*(233)}}>
            {items.map((item,index)=>{
            return (<Card key={index} item={item} />)
            })}
        </div>
    </div>
  )
}

export default CardList