import React, { useState } from 'react'
const forese = require('../assets/forese.png')


function FAQ() {
const [currentUser,setCurrentUser]=useState(sessionStorage.getItem('role'))

  return (
    <>
        <div className='bg-[#8EA7E9] min-h-screen'>
            <header className='bg-[#DBDFEA]'>
                    <nav className='flex justify-between items-center w-[92%] mx-auto py-2'>
                        <div>
                            <img 
                            className='w-14'
                            alt='logo'
                            src={forese} />
                        </div>
                        <div>
                            <ul className=' text-lg flex items-center gap-[4vw]'>
                                {
                                    currentUser==='Member'?
                                    <li>
                                        <a href='/dashboard'>Dashboard</a>
                                    </li>
                                    :
                                    <li>
                                        <a href='/ddashboard'>Dashboard</a>
                                    </li>
                                }
                               
                                <li>
                                    <a href='/hr-pitch'>HR Pitch</a>
                                </li>
                                <li>
                                    <a href='/faq'>FAQs</a>
                                </li>
                                {/* <li>
                                    <a  href='/'>About</a>
                                </li> */}
                                
                            </ul>
                        </div>
                        {/* <div>
                            <button className='bg-[#87acec] text-white px-5 py-2 rounded-full hover:bg-[#a6c1ee]' onClick={()=>navigate('/login')}>Sign In</button>
                        </div> */}
                    </nav>
            </header>
            <div className="w-full bg-white px-6 pt-10 pb-8 my-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
                <div className="mx-auto px-5">
                    <div className="flex flex-col items-center">
                        {/* <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2> */}
                        <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequenty asked questions
                        </p>
                    </div>
                    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> Will I be paid for the event?</span>
                                    <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">As students entirely organise this event, we regret that we don't have the means to offer any payment. However, we greatly value your participation. Your support would be invaluable to our students (Sir/Ma'am).

                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> Are these Actual placements?</span>
                                    <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">No(Sir/Ma’am), this is only a mock placement where we provide our students with an interview-like experience.

                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> For whom is this event being held?</span>
                                    <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">This event is held for pre-final year students in order to prepare them for upcoming placements.

                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> What benefits does an HR gain from attending mock placements?</span>
                                    <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">HR professionals can leverage mock placements to assess candidate suitability, provide feedback, evaluate cultural fit, identify talent, also networking amongst Hr’s and contribute to employee development. 
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> What arrangements do you offer?</span>
                                    <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">If you choose to attend online, the event will be held in Google Meet with break-out rooms. The arrangements can be tailored according to your preferences (ma'am or sir).If you choose to attend offline, we will arrange for a cab to and from our college, as well as breakfast, lunch, and refreshments (ma'am or sir).
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> When are mocks held?</span>
                                    <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">No(Sir/Ma’am), this is only a mock placement where we provide our students with an interview-like experience.

                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> Can the timings be adjusted?</span>
                                    <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes sure (Sir/Ma'am), the timing can be tailored to meet your requirements.

                                </p>
                            </details>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className='bg-[#8EA7E9]'>  <span>.</span> </div>
        </div>
    
    </>
  )
}

export default FAQ