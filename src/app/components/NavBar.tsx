import Image from 'next/image'
import React from 'react'


const NavBar = () => {
  return (
    <header className='flex flex-col justify-center'>
        <div className=' flex w-full h-14'>
            <div className='w-2/4 bg-slate-700'/>
            <div className=' w-2/4 bg-pink-700'/>   
        </div>
        <div className='flex items-center justify-center'>
            <Image 
                src="/DonateLife-logo.png"
                alt='logo-donate-organ' width={250} height={250}   
                layout="fixed"
                priority
            />
            <Image 
                src="/why-documentaries-logo.png" alt='logo-donate-organ' width={350} height={350}  
                layout="fixed"
                priority
            />
        </div>
        <div className=' flex w-full h-14'>
            <div className=' w-2/4 bg-pink-700'/> 
            <div className='w-2/4 bg-slate-700'/>   
        </div>
    </header>
  )
}

export default NavBar