import React from 'react'
import logo from '../../assets/logo-emoji.png'
import {GiHamburgerMenu} from 'react-icons/gi'

const NavMenu = [
    {
        id: 1,
        name: 'Home',
        url: '/',
    },
    {
        id: 2,
        name: 'About',
        url: '/about',
    },
    {
        id: 3,
        name: 'Contact',
        url: '/contact',
    }
];
const Navbar = () => {
  return (
    <>
        <div className= 'py-5 bg-gray-600 text-white pr-15 pl-15'>
        <div className='container flex justify-between items-center'>
            {/* {logo section} */} 
            <div>
                <img src={logo} alt="" className='w-[80px]' />
            </div>
            {/* Nav Menu Section */}
            <div>
                <ul className='hidden md:flex justify-center gap-10'>
                    {
                        NavMenu.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a href={item.url} className='hover:text-amber-300 text-xl font-semibold text-white/70 duration-300'>{item.name}</a>
                                </li>
                            );
                        })
                    }
                </ul>
                {/* mobile hamburger menu */}
                <div className='md:hidden'>
                    <GiHamburgerMenu className='text-3xl'/>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar