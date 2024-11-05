import React from 'react'
import Form from '../Utils/Form';
import rocket from '../../assets/rocket.webp';
import phone from '../../assets/phone.webp';
const List = ({ icon }) => {
    return (
        <div className='flex gap-2 items-center'>
            <div className="border-2 w-7 h-7 rounded grid place-items-center">
                {icon}
            </div>
            <div className='text-sm'>
                <p className='font-semibold'>Send us an email</p>
                <p>contact@socialwelfare.com</p>
            </div>
        </div>
    )
}
const Contact = () => {
    return (
        <div className='py-8'>
            <div className='text-center max-w-screen-xl m-auto'>
                <h4 className='text-indigo-600 font-semibold'>Contact Us!</h4>
                <h3 className='flex items-center justify-center gap-1 font-bold text-xl text-slate-900'>
                    Get in touch
                    <img className='w-8' src={phone} alt="" />
                </h3>
                <p className='text-slate-600 mb-8'>Empowering Citizens with Essential Welfare Services, Support Programs, and Opportunities for a Better, Inclusive Future.</p>
            </div>

            <div className='max-w-4xl m-auto grid grid-cols-2 p-4 rounded-xl bg-slate-50 border border-slate-400'>
                <div className='pr-4'>
                    <div className='border-b border-slate-400'>
                        <strong className='text-xl font-bold mb-4'>Get in touch</strong>
                        <p className='text-slate-800 mb-4'>
                            We are here to assist you with any questions or concerns you may have. Our team is dedicated to providing support and ensuring your needs are met.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 mt-4'>
                        <List
                            icon={<i className="text-slate-400 uil uil-phone" />}
                        />
                        <List
                            icon={<i className="text-slate-400 uil uil-envelope" />}
                        />
                        <List
                            icon={<i className="text-slate-400 uil uil-comment-alt" />}
                        />
                    </div>
                </div>
                <div className='border-l border-slate-400 pl-4'>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact