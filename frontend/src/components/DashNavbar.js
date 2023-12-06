import React,{useContext, useState, Fragment} from 'react'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'
import { Menu, Transition } from '@headlessui/react'


import FileUploadForm from './FileUploadForm'
import {currentUserContext} from '../App'
const forese = require('../assets/forese.png')


function DashNavbar() {
    const navigate = useNavigate()
    const {currentUser,setCurrentUser } = useContext(currentUserContext);
    const [currentUserRole,setCurrentUserRole] = useState(sessionStorage.getItem('role'))
    const [showUploadModal,setShowUploadModal] = useState(false)

    const currentRoute = window.location.href
   
    const handleLogout = ()=>{
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('role')
        sessionStorage.removeItem('incharge')

        toast.success('Logout Succesfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setCurrentUser(null)
        navigate('/login')
    }
    let user = sessionStorage.getItem('email')
    user = user?user.substring(0,user.length-10):''
    user = user?user.charAt(0).toUpperCase() + user.slice(1):''
    
  return (
   <>
        <header className='bg-[#8294C4] mb-[2%]'>
            <nav className='flex justify-between items-center w-[92%] mx-auto py-2'>
                <div>
                    <img className='w-16'
                    alt='forese-logo'
                    src={forese} />
                </div>
                <div className='flex justify-end '>
                    {
                        currentUserRole==='Director'?
                        (
                            <div className='mr-2 ml-2'>
                                {
                                    currentRoute.includes('globalHR')
                                    ?
                                    <button className='bg-[#DBDFEA] text-[#000000] px-8 py-2 rounded-full hover: scale-95 duration-150' onClick={()=>navigate('/ddashboard')}>Dashboard</button>
                                    :
                                    <button className='bg-[#DBDFEA] text-[#000000] px-8 py-2 rounded-full hover:scale-95 duration-150' onClick={()=>navigate('/globalHR')}>Global HR</button>
                                } 
                                
                            </div>
                        ):(<></>)
                    }

                    <button className=' mr-2 ml-2 bg-[#DBDFEA] text-[#000000] px-5 py-2 rounded-full hover:scale-95 duration-150' onClick={()=>{
                        setShowUploadModal(true)
                        }}>Upload Contacts 
                    </button>
                    
                    <Menu as="div" className="relative inline-block text-left">
                          <div>
                            <Menu.Button className="">
                            {
                        currentUserRole==='Member'?(
                            <div className='mr-2 ml-2'>
                                <button className='bg-[#DBDFEA] text-[#000000] px-5 py-2 rounded-full flex  items-center justify-between'>
                                    <i className=" fa-solid fa-people-group px-2"></i>
                                    Hello {user}
                                </button>
                            </div>
                    
                        ):(
                            <div className='mr-2 ml-2'>
                                <button className='bg-[#DBDFEA] text-[#000000] px-5 py-2 rounded-full flex  items-center justify-between'>
                                    <i className="fa-solid fa-user-tie px-2"></i>
                                    Hello {user}
                                </button>
                            </div>
                        )
                    }
                            </Menu.Button>
                          </div>
                    
                          <Transition
                            as={Fragment}
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 rounded-full">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                   <div className='ml-2 mt-1'>
                                   <button className='bg-[#8294C4] text-[#000000] px-10 py-2 rounded-full hover:scale-95 duration-150' onClick={()=>navigate('/faq')}>
                                    FAQs  
                                   </button>
                                    </div>

                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                   <div className='ml-2 mt-1'>
                                   <button className='bg-[#8294C4] text-[#000000] px-8 py-2 rounded-full hover:scale-95 duration-150'onClick={()=>navigate('/hr-pitch')}>
                                    HR Pitch  
                                   
                                   </button>
                                    </div>

                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <div className='ml-2 mt-1'>
                                    <button className='bg-[#8294C4] text-[#000000]  px-6 py-2 rounded-full hover:scale-95 duration-150' onClick={handleLogout}>
                                    <i className=" px-2 fa-solid fa-arrow-right-from-bracket"></i>    
                                    Logout
                                    </button>
                                    </div>

                                  )}
                                </Menu.Item>
                               
                              </div>
                             
                            </Menu.Items>
                          </Transition>
                    </Menu>
                </div>
            </nav>
        </header>
        <Modal  isVisible={showUploadModal} onClose={()=>{setShowUploadModal(false)}}>
            <FileUploadForm onClose={()=>{setShowUploadModal(false)}}/>
        </Modal>
   </>
  )
}

export default DashNavbar