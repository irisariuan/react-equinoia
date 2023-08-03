'use client';

import InputBar from '@/components/input'
import InputSection from '@/components/inputSection';
import Link from 'next/link';
import { useState } from 'react'

export default function () {
    const [agree, setAgree] = useState(false)

    return (
        <div className="m-6 flex justify-center items-center text-black dark:text-white">
            <div className="m-2 flex bg-rice-content/80 border border-gold-200/20 dark:border-zinc-70000/20 dark:bg-zinc-950/80 backdrop-blur-xl p-8 rounded-xl flex-col">
                <div className='text-left'>
                    <h1 className='text-4xl dark:text-white text-gold-400'>Application Form</h1>
                    <p className='text-gold-300 dark:text-zinc-400 font-light text-lg'>Become our partners!</p>
                    <div className='mb-10 h-0.5 w-3/4 md:xl:w-2/5 bg-yellow-600'></div>
                </div>
                <form action="/api/application" method="post" className='flex flex-col'>
                    <div className='flex flex-row flex-wrap'>
                        <InputSection title="Personal Details">
                            <InputBar type="text" id="name" label="Name" placeholder="Name" />
                            <InputBar type="text" id="secondName" label="Second Name" placeholder="Second Name" />
                            <InputBar type="tel" minLength={8} maxLength={8} id="phoneNo" label="Phone Number" placeholder="Phone No." />
                        </InputSection>

                        <InputSection title="Company Details">
                            <InputBar type="text" id="companyName" label="Company Name" placeholder="Company Name" />
                            <InputBar type="tel" minLength={8} maxLength={8} id="companyNumber" label="Company Number" placeholder="Company Number" />
                            <InputBar type="text" id="companyAddress" label="Company Address" placeholder="Company Address" />
                        </InputSection>
                        <InputSection title="Some Details">
                            <InputBar type="text" id="companyName" label="Company Name" placeholder="Company Name" />
                            <InputBar type="tel" minLength={8} maxLength={8} id="companyNumber" label="Company Number" placeholder="Company Number" />
                            <InputBar type="text" id="companyAddress" label="Company Address" placeholder="Company Address" />
                        </InputSection>
                        <InputSection title="Some Details">
                            <InputBar type="text" id="companyName" label="Company Name" placeholder="Company Name" />
                            <InputBar type="tel" minLength={8} maxLength={8} id="companyNumber" label="Company Number" placeholder="Company Number" />
                            <InputBar type="text" id="companyAddress" label="Company Address" placeholder="Company Address" />
                        </InputSection>
                    </div>

                    <div className='flex content-center items-center justify-center mt-5'>
                        <input type="checkbox" id="agreement" className='ml-2 mr-2 p-2 text-xl' defaultChecked={false} onClick={() => {setAgree(!agree)}} />
                        <label htmlFor="agreement" className='dark:text-zinc-300'>I have read and agreed to the <Link href="/terms" className='text-blue-500 hover:text-blue-600'>terms and conditions</Link></label>
                    </div>
                    <button type="submit" disabled={!agree} className="bg-blue-500 m-2 p-2 justify-center rounded-lg disabled:bg-blue-800 disabled:text-zinc-300 hover:bg-blue-600 text-white">Submit</button>
                </form>

            </div>
        </div>
    )
}