import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <nav className='flex flex-col justify-center'>
      <div className='flex w-full h-12'>
        <div className='w-2/4 bg-navbar-blue' />
        <div className='w-2/4 bg-navbar-pink' />
      </div>
      <div className='flex items-center justify-center py-2'>
        <div className='relative w-44 h-24 md:w-52 md:h-28 lg:w-60 lg:h-32'>
          <Image
            src="/DonateLife-logo.png"
            alt='logo-donate-organ'
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className='relative w-60 h-28 md:w-72 md:h-32 lg:w-80 lg:h-36'>
          <Image
            src="/why-documentaries-logo.png"
            alt='logo-why-documentaries'
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
      <div className='flex w-full h-12'>
        <div className='w-2/4 bg-navbar-pink' />
        <div className='w-2/4 bg-navbar-blue' />
      </div>
    </nav>
  );
};

export default NavBar;
