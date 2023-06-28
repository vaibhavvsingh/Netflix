import React, { useEffect } from 'react'
import data from '../mock/data'
import {FaPlay, FaInfoCircle} from 'react-icons/fa'
import CardList from '../components/CardList'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
  const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn){
      navigate('/login')
    }
  },[])
  return (
    <div className='px-16 overflow-x-hidden'>
      <div className="absolute h-[100vh] top-0 left-0 -z-10 overflow-hidden">
        <img className=' h-[120vh] object-cover' src="https://occ-0-2368-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABegRHoRu6yW-jiVlslt2noLdYpMKH4d5KqavMVe00zRxnWbsC6LT5btbQQo3EOzaloV_v6DQDniK6mpIxBWxGpQ0LMr3zaSVrQqE.webp?r=ed3" alt="" />
      </div>
      <div className="absolute top-0 h-[90vh] w-[30%] flex flex-col justify-center gap-4">
        <img src="https://occ-0-2368-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZB_hLgI7lQ7Iww24aAuflqM3CFCXO9uncQQTcren0w8_gLB0nUmjwa67gunys4EMUE37bxhYv2EoZimJoINWPBwmdCstoYlICw_Pl6erAwAfDm8r8Edh-SpyTKJiX4nPwkPYqnOVCN3gJciT7sU01P9nVrGnI4uR0nLb4dg9bZGMZIVfNAOVg.webp?r=acd" alt="" />
        <div className='flex gap-4'>
          <button className='bg-white text-black py-3 px-5 rounded-md font-semibold flex items-center gap-2'><FaPlay />Play</button>
          <button className='bg-gray-600 text-white py-3 px-5 rounded-md font-semibold flex items-center gap-2'><FaInfoCircle />More Info</button>
        </div>
      </div>
      <div className="mb-[82vh]"></div>
      <div className="flex flex-col gap-6 mb-8">
        <CardList items={data.slice(0,10)} title={"Popular on Netflix"} />
        <CardList items={data.slice(10,20)} title={"Continue Watching >"} />
        <CardList items={data.slice(20,30)} title={"Trending Now"} />
        <CardList items={data.slice(30,40)} title={"Docs & Reality TV"} />
        <CardList items={data.slice(40,50)} title={"New Releases"} />
        <CardList items={data.slice(50,60)} title={"Critically-acclaimed Gritty TV Programmes"} />
        <CardList items={data.slice(60,70)} title={"Award-Winning TV Shows"} />
        <CardList items={data.slice(70,80)} title={"Exciting Reality TV"} />
        <CardList items={data.slice(80,90)} title={"Watch in One Night"} />
        <CardList items={data.slice(90,100)} title={"Top Searches"} />
      </div>
    </div>
  )
}

export default Home