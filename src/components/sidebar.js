import React from 'react'

export default function SideBar() {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className='flex item-center gap-3 pl-8 cursor-pointer'>
                <img src='' alt='abc' />
            </div>
        </div>
    </div>
  )
}
