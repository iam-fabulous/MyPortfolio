import React from 'react'
import person from '../../assets/Portfolio.png'
import {FaArrowRight} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

const Hero = () => {
  return (
    <>
        <main className='bg-gray-700 text-white lg:p-[20px]'>
            <div className="container ">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 min-h-[600px] place-items-center py-20 md:py-0'>
                 {/* Text & Social Icons */}
    <div>
        <h1 className="text-4xl md:text-6xl font-bold relative z-20">
            Innah <br/> Chukwuebuka Emmanuel.
        </h1>
        <div className="h-[4px] w-[30px] bg-amber-300"></div>
        
        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
            <FaGithub className="text-2xl hover:scale-110 cursor-pointer duration-200" />
            <FaInstagram className="text-2xl hover:scale-110 cursor-pointer duration-200" />
            <FaLinkedinIn className="text-2xl hover:scale-110 cursor-pointer duration-200" />
        </div>
    </div>

    {/* Image */}
    <div className="flex justify-center">
        <img 
            src={person} 
            alt="" 
            className="relative lg:right-40  w-[60%] sm:w-[250px] md:w-full max-w-[400px] h-auto sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[450px] "
        />
    </div>
                {/* text content section */}
                <div className='space-y-7'>
                    <p className='text-sm opacity-50 tracking-widest font-serif translate-y-3'>- Introduction</p>
                    <h1 className='text-2xl lg:text-3xl'>Product Designer and Software Developer, based in Nigeria.</h1>
                    <p className='text-sm leading-6 opacity-70'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus, repudiandae possimus ex unde ducimus qui facilis veniam minima autem.
                    </p>
                    <button className='text-amber-300 border-b-2 border-amber-300 font-bold p-1 flex items-center gap-4 group'>
                        My Story <FaArrowRight className='text-sm group-hover:translate-x-1 transition duration-200'/>
                    </button>
                </div>
                </div>
            </div> 
        </main>
    </>
  )
}

export default Hero