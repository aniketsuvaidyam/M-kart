import React, { useState } from 'react'
import Logo from "../img/logo.png"
import Searchbar from './Searchbar'
import { BsHeart, BsCart3 } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import MobileViewNavbar from './MobileViewNavbar';


const Navbar = () => {
    const [open, setopen] = useState(false)
    const toggle = () => {
        setopen(!open)

    }

    return (
        <>

            {/* laptop view */}
            <div className='hidden md:block sticky top-0 '>
                <div className='bg-blue-600  h-16 flex justify-between  px-12 items-center '>
                    <div className='w-1/4 '><img className='h-16   ' src={Logo} alt="" /></div>
                    <div className='flex justify-between w-1/2  px-2'>
                        <div className='w-4/5 px-4' ><Searchbar /></div>

                        <div className=' relative group flex items-center'>
                            <button className=' bg-white  py-1 font-semibold  h-8 w-28 '>Sign In</button>

                            <ul className='absolute  rounded-md list-none hidden group-hover:block bg-gray-100 items-center w-28 ml-1 '>
                                <li className='px-4 py-1 hover:rounded-md hover:bg-white hover:cursor-pointer'>Sing Up</li>
                                <li className='px-4 py-1 hover:rounded-md hover:bg-white hover:cursor-pointer'>Profile</li>

                            </ul>

                        </div>
                    </div>
                    <div className='w-1/4 flex justify-end'>
                        <ul className='flex px-4'>
                            <li className='text-2xl text-white'><BsHeart /></li>
                            <li className='text-2xl text-white px-6'><BsCart3 /></li>
                        </ul>

                    </div>

                </div>
            </div>
            {/* Mobile View */}

            <div className=' w-full h-24 bg-blue-600 md:hidden block relative '>
                <div className='h-  w-full flex justify-between items-center px-4 '>
                    <div className='text-3xl text-white cursor-pointer' ><GoThreeBars onClick={toggle} /></div>
                    {open === true ? <MobileViewNavbar /> : <></>}
                    <div className=' '><img className='h-14   ' src={Logo} alt="" /></div>

                    <div>
                        <ul className='flex '>
                            <li className='text-2xl text-white '><BsCart3 /></li>
                        </ul>
                    </div>
                </div>
                <div className='px-4'><Searchbar /></div>

            </div>
        </>
    )
}

export default Navbar
