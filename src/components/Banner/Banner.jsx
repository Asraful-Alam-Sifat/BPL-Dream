import React from 'react';
import bannerImg from '../../assets/bg-shadow.png';
import cricketImg from '../../assets/banner-main.png';

const Banner = () => {
    return (
        <div className='bg-black rounded-3xl w-333 mx-auto mt-9'>
            <img className='w-full rounded-3xl relative' src={bannerImg} alt="Main Banner" />
            <div className='absolute top-1/3 left-1/4 flex flex-col gap-4 mx-auto'>
                <img className='mx-auto' src={cricketImg} alt="Cricket Image" />
                <div>
              <h1 className='text-white font-extrabold text-4xl text-center mb-2'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='font-medium text-gray-300 text-xl text-center mb-7'>Beyond Boundaries Beyond Limits</h3>
                <button className=' bg-gradient-to-r from-pink-300 to bg-yellow-500 border border-gray-400 rounded-2xl btn mx-auto block text-base font-semibold'>Claim Free Credit</button>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;