import React from 'react';
import bannerImg from '../../assets/campaign.jpg';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-4 '>
            <div className='order-2 md:order-1 bg-slate-100 p-4 rounded-lg overflow-hidden flex items-center'>
                <div className=''>
                    <h1 className='font-bold text-4xl'>
                        Empowering Communities for a Better Tomorrow
                    </h1>
                    <p className='text-slate-600 my-4'>
                        Join us in our mission to support and uplift those in need. Together, we can create a positive impact and build a brighter future for everyone.
                    </p>

                    <button className="bg-indigo-500 hover:bg-indigo-400 rounded-md px-4 py-[6px] text-gray-50 transition duration-300 ease-in-out transform hover:scale-105">
                        <a href="" className='flex gap-1 items-center'>
                            <i className="uil uil-arrow-right"></i>
                            Learn More
                        </a>
                    </button>
                </div>
            </div>
            <div className='order-1 md:order-2 bg-[#f7912f] h-fit overflow-hidden rounded-lg'>
                <img className='w-full max-h-[320px] object-contain' src={bannerImg} alt="Banner" />
            </div>
        </div>
    );
}

export default Banner;
