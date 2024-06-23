import React from 'react';
import PropTypes from 'prop-types';
import { assets } from '../assets/assets';

export default function NavBar({ userName = 'SR', userImage = '', onExploreClick = () => {}, onInstallClick = () => {} }) {
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt='Go back' />
          <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt='Go forward' />
        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer' onClick={onExploreClick}>Explore Premium</p>
          <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer' onClick={onInstallClick}>Install App</p>
          <div className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>
            {userImage ? <img src={userImage} alt='User profile' className='rounded-full w-full h-full' /> : userName}
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4 cursor-pointer'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl'>All</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl'>Music</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl'>Podcasts</p>
      </div>
    </>
  );
}

NavBar.propTypes = {
  userName: PropTypes.string,
  userImage: PropTypes.string,
  onExploreClick: PropTypes.func,
  onInstallClick: PropTypes.func,
};
