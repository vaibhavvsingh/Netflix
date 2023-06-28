import React from 'react'
import { FaPen, FaUser, FaSmile, FaQuestionCircle } from 'react-icons/fa'
import { FaRightFromBracket } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/userSlice'

function Dropdown({isHovered}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function handleLogout(){
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div className={'absolute top-12 right-0 bg-black opacity-75 w-56 flex flex-col p-4 gap-2 text-sm rounded-md transition-all duration-500 '+(!isHovered ? 'hidden' : '' )}>
        <div className='flex gap-4 items-center'>
          <img src="https://occ-0-2368-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4" alt="" />
          John
        </div>
        <div className='flex gap-4 items-center'>
          <img src="https://occ-0-2368-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcJE6sna7-v-fDszqTSTLqoNLNTV8u6FCGOehw7JKWVmU-oLMoXYX6K0f2nKdOFZcATnH9GAw2kgTZTxZj1cEPt9GYnRYbc.png?r=54d" alt="" />
          Children
        </div>
        <div className='flex gap-4 items-center'><FaPen />Manage Profiles</div>
        <div className='flex gap-4 items-center'><FaSmile />Transfer Profile</div>
        <div className='flex gap-4 items-center'><FaUser />Account</div>
        <div className='flex gap-4 items-center'><FaQuestionCircle/>Help Centre</div>
        <hr />
        <div className='flex gap-4 items-center cursor-pointer' onClick={handleLogout}><FaRightFromBracket/> Sign out of Netflix</div>
    </div>
  )
}

export default Dropdown