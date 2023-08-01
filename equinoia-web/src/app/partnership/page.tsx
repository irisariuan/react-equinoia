'use client';

import InputBar from '@/components/input'
import Link from 'next/link';
import { useState } from 'react'

export default function () {
    const [agree, setAgree] = useState(false)
    console.log(agree)

    return (
        <div className="m-6 flex justify-center items-center text-black dark:text-white">
            <div className="m-2 flex justify-center items-center content-center bg-rice-content dark:bg-zinc-950 p-8 rounded-xl flex-col">
                <div className='text-left'>
                    <h1 className='text-4xl dark:text-white text-rice-dark'>Application Form</h1>
                    <p className='mb-10 text-gold-300 dark:text-zinc-400'>Become our partners!</p>
                </div>
                <form action="/api/application" method="post" className='flex flex-col'>
                    <div className='flex flex-row flex-wrap'>
                        <div className='bg-rice dark:bg-black p-5 rounded-2xl m-2'>
                            <p className="text-lg text-gold-400 dark:text-zinc-400 mb-8">Personal Details</p>
                            <InputBar type="text" id="name" label="Name" placeholder="Name" />
                            <InputBar type="text" id="secondName" label="Second Name" placeholder="Second Name" />
                            <InputBar type="tel" minLength={8} maxlength={8} id="phoneNo" label="Phone Number" placeholder="Phone No." />
                        </div>

                        <div className='bg-rice dark:bg-black p-5 rounded-2xl m-2'>
                            <p className="text-lg text-gold-400 dark:text-zinc-400 mb-8">Company Details</p>
                            <InputBar type="text" id="companyName" label="Company Name" placeholder="Company Name" />
                            <InputBar type="tel" minLength={8} maxlength={8} id="companyNumber" label="Company Number" placeholder="Company Number" />
                            <InputBar type="text" id="companyAddress" label="Company Address" placeholder="Company Address" />
                        </div>
                        <div className='bg-rice dark:bg-black p-5 rounded-2xl m-2'>
                            <p className="text-lg text-gold-400 dark:text-zinc-400 mb-8">Company Details</p>
                            <InputBar type="text" id="companyName" label="Company Name" placeholder="Company Name" />
                            <InputBar type="tel" minLength={8} maxlength={8} id="companyNumber" label="Company Number" placeholder="Company Number" />
                            <InputBar type="text" id="companyAddress" label="Company Address" placeholder="Company Address" />
                        </div>
                        <div className='bg-rice dark:bg-black p-5 rounded-2xl m-2'>
                            <p className="text-lg text-gold-400 dark:text-zinc-400 mb-8">Company Details</p>
                            <InputBar type="text" id="companyName" label="Company Name" placeholder="Company Name" />
                            <InputBar type="tel" minLength={8} maxlength={8} id="companyNumber" label="Company Number" placeholder="Company Number" />
                            <InputBar type="text" id="companyAddress" label="Company Address" placeholder="Company Address" />
                        </div>
                    </div>

                    <div className='flex content-center items-center justify-center mt-5'>
                        <input type="checkbox" id="agreement" className='ml-2 mr-2 p-2 text-xl' onClick={() => {setAgree(!agree)}} />
                        <label htmlFor="agreement" className='dark:text-zinc-300'>I have read and agreed to the <Link href="/" className='text-blue-600 hover:text-blue-700'>terms and conditions</Link></label>
                    </div>
                    <button type="submit" disabled={!agree} className="bg-blue-600 m-2 p-2 justify-center rounded-lg disabled:bg-blue-800 disabled:text-zinc-300 hover:bg-blue-700 text-white">Submit</button>
                </form>

            </div>
        </div>
    )
}