import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (

    <div className='flex justify-between px-10 items-center bg-gray-300'>
      <img width="80px"
      className='p-2 rounded-full'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RMKKKXbQaaVk_Ny8Ya5gLA5H1_WIDyTWcA&s'
      alt='' />
      <ul className='flex gap-10 text-2xl'>
        <li>
          <NavLink to="" className={({isActive})=>isActive ? "text-blue-100 bg-blue-500 p-2":""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="productslist" className={({isActive})=>isActive ? "text-blue-100 bg-blue-500 p-2":""}>ProductsList</NavLink>
        </li>
        <li>
          <NavLink to="contactus" className={({isActive})=>isActive ? "text-blue-100 bg-blue-500 p-2":""}>ContactUs</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header