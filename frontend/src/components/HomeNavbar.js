import React from 'react'
import { useNavigate } from "react-router-dom"

const forese = require('../forese.png')
function  Test() {
    const navigate = useNavigate()
    return (
        <>
            <div className='font - [Poppins] bg-[#8EA7E9] min-h-screen'>
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
                                {/* <li>
                                    <a href='/hr-pitch'>HR Pitch</a>
                                </li>
                                <li>
                                    <a href='/faq'>FAQs</a>
                                </li> */}
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
                <div className=''>
                    <div className='flex items-center justify-center'>
                    <img 
                        className='object-fill h-40 w-80 m-[2%] p-[2%]'
                        alt='logo'
                        src={forese} />

                    </div>
                    <div className=' mt-[6%]'>
                        <div className='flex items-center justify-center'>
                        <p className='text-xl font-semibold max-w-2xl text-center '>Mock placements is a flagship event organized by FORESE. Each year we have an attendance over 100 HRs and other technical personel from several companies who are invited to examine the technical strength of about 800+ pre final year students.</p>
                        </div>
                        <div className='mt-[3%] flex items-center justify-center'>
                            <button className='bg-[#DBDFEA] text-xl font-semibold content-center px-[4%] py-2 rounded-full hover:bg-[#ACB1D6] hover:text-white hover:z-90 duration-200' onClick={()=>navigate('/login')}>
                                Sign In
                            </button>
                        </div>
                    </div>
                    {/* Footer */}
                    <div class=" fixed bottom-0 w-full">
                        <div class="max-w-2xl mx-auto text-white py-2">
                            <div class=" flex flex-col md:flex-row md:justify-center items-center text-lg">
                                <p class="order-2 md:order-1 mt-8 md:mt-0">Designed & Developed by <span className='underline cursor-pointer'>FORESE - TECH</span></p>
                                {/* <div class="order-1 md:order-2">
                                    <span class="px-2">About us</span>
                                    <span class="px-2 border-l">Contact us</span>
                                    <span class="px-2 border-l">Privacy Policy</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </>
    )
}

export default Test