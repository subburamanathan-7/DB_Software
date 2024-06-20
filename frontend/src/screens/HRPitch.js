import React,{useState} from 'react'
const forese = require('../assets/forese.png')

function HRPitch() {

const [currentUser,setCurrentUser]=useState(sessionStorage.getItem('role'))
    return (
        <>  
            <div className='bg-[#8EA7E9] min-h-screen'>
                <header className=' bg-[#DBDFEA]'>
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
                <div className='bg-white w-[80%] px-6 py-10 pb-8 my-[5%] shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10'>

                    <div className=' mx-[2%] mt-[2%] text-lg  '>
                    <div className=' font-semibold'>Call the HR ( office hours )</div><br/>
                    Good Morning/Good Afternoon Sir/Ma'am. Am I speaking to (Mr./Ms) (HR Name) from (Company Name)?
                    </div>
                    <div class="mx-[2%] max-w-full mt-[2%]">
                        <div class="divide-y divide-gray-100">
                        <details class="group">
                            <summary
                                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                                If yes
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <div class="pb-4 text-lg">This is  (Your Name) and I am calling on behalf of Mr. S Muraleedharan sir, Chief Placement Officer of Sri Venkateswara College of Engineering, Sriperumbudur. Could I please borrow 5 minutes of your time?</div>
                        </details>

                        <details class="group">
                            <summary
                                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                                If available 
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <div class="pb-4 text-lg">
                                Sir/ Ma'am, we are organising an event called the MOCK PLACEMENTS. This event is held exclusively for the pre-final year students of our college and assists them in preparing for the actual placements that will be held for them next year. 
                                The event aims to help students understand the requirements of the industry, by making them experience a one-on-one interview-like environment.<br/><br/>

                                We invite HRs and company executives to interview our pre-final year students in a mock placement setting. We've been doing this for the past 15 years and over
                                100 HRs are usually in attendance. Our aim is to give our students the opportunity to experience placements first-hand and learn how to conduct themselves in a professional manner. We believe our students deserve the maximum exposure our college can provide to them.This year it is being held in both online and offline mode. The online event is being held on the <b>17th of March</b> and the offline is being held on the <b>24th of March</b>. The event begins at <b>9:30 AM</b> and will conclude at <b>3:00 PM</b>.<br/><br/>

                                If you prefer our online event, it'll be held in Google Meet using break-out rooms.
                                The timings and other arrangements can be tailored according to your specifications and based on your availability.
                                If you decide to attend our offline event, You will be provided with breakfast, lunch, and refreshments. We will arrange a cab to and from our college. We assure you all the precautions will be taken.<br/><br/>


                                Do you have any queries for me, (Sir/Ma'am)?
                                <b><a href='/faq'>(Refer FAQS)</a></b><br/><br/>

                                Could I please have your E-Mail ID so I can send you a formal invite?
                                (Note down the mail ID)<br/><br/>

                                Thank you so much for your time and patience, (Sir/Ma'am). We will shortly send you an email regarding the event details. Thank you. Have a nice day (Sir/Ma'am).
                                (End Call)
                            </div> 
                        </details>
                        <details class="group">
                            <summary
                                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                                If not available 
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <div class="pb-4 text-lg">I am so sorry to disturb you, (Sir/Ma'am). What time is suitable to call you back?(<b>Note down the time</b>) Thank you, (Sir/ Ma'am).(End Call)</div> 
                        </details>
                       
                        <details class="group">
                            <summary
                                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                                <span className='font-semibold'>If wrong company </span>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <div class="pb-4 text-lg">Sorry, can you please tell me in which company your currently working at ?(<b>Note it down</b>).</div>
                        </details>
                      
                        <details class="group">
                            <summary
                                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                                If wrong number
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <div class="pb-4 text-lg">Sorry for disturbing,  thank you </div>
                        </details>
                       
                       
                    </div>
                    </div>
                </div>
                <div className='bg-[#8EA7E9]'>  <span>.</span> </div>
            </div>
        </>
    )
}
export default HRPitch