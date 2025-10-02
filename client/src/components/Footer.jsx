import React from 'react'
import assets, { footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg/primary/3'>
        <div className='flex flex-col md:flex-row items-center justify-between py-10 gap-10 border-b border-gray-500/30 text-gray-500'>
             <div>
                <img src={assets.logo} alt="logo" className='w-32 sm:w-44'/>
                <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, officia dicta! Necessitatibus.</p>
             </div>

              <div className='flex w-full flex-wrap justify-between md_w-[45%] gap-5'>
                {footer_data.map((section , index)=> (
                    <div key={index}>
                        <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2 '>{section.title}</h3>
                        <ul className='text-sm spacr-y-1'>{section.links.map((links,i)=> (
                            <li key={i}>
                                <a className='hover:underline transition' href="#">{links}</a>
                            </li>
                        ))}</ul>
                     </div>
                ))}
             </div>
          

        </div>
        <p className='py-4 text-center text-small md:text-base text-gray-500/80'>
            Copyright ©️ 2025 BlogApp - All rights reserved. Truly made by Muzahir ali❤️
        </p>
    </div>
  )
}

export default Footer