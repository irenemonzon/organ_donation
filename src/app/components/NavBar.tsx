
import Image from 'next/image'
import React from 'react'


const NavBar = () => {
  return (
    <nav className='flex flex-col justify-center'>
        <div className=' flex w-full h-14'>
            <div className='w-2/4 bg-navbar-blue'/>
            <div className=' w-2/4 bg-navbar-pink'/>   
        </div>
        <div className='flex items-center justify-center'>
            <Image 
                src="/DonateLife-logo.png"
                alt='logo-donate-organ' 
                width={200} 
                height={60}   
                priority
                className="w-32 md:w-44 lg:w-52"
            />
            <Image 
                src="/why-documentaries-logo.png" 
                alt='logo-donate-organ' 
                width={350} 
                height={350}  
                priority
                className="w-52 md:w-80 lg:w-96"
            />
        </div>
        <div className=' flex w-full h-14'>
            <div className=' w-2/4 bg-navbar-pink'/> 
            <div className='w-2/4 bg-navbar-blue'/>   
        </div>
    </nav>
  )
}

export default NavBar