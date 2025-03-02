import React from 'react'
import logo from '../../assets/logo-emoji.png'

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
        <div className= 'py-5 bg-gray-600 text-white'>
        <div className='container flex justify-between items-center'>
            {/* {logo section} */} 
            <div>
                <img src={logo} alt="" className='w-16' />
            </div>
            {/* Nav Menu Section */}
            <div>
                <ul className='flex justify-center gap-5'>
                    {
                        NavMenu.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a href={item.url}>{item.name}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar