import React, {useState } from 'react'
import{useMutation, useQueryClient} from '@tanstack/react-query'
import { toast } from 'react-toastify'

import validator from 'validator'
import {addContact} from '../features/contacts/ContactServices'
 
function ContactForm(currentUserID,onClose) {
    const queryClient = useQueryClient()
   
    const [formData,setFormData]= useState({
        name:'',
        company:'',
        contactNumber:'',
        email:'',
        status:'',
        interviewMode:'',
        HRCount:'',
        transport:'',
        address:'',
        internship:'',
        // department: '',
        comments:''
    })
    const [contactState, setcontactState] = useState(false)
    const [companyState, setcompanyState] = useState(false)
    const [statusState, setstatusState] = useState(false)
    const [nameState, setnameState] = useState(false)


    // Add ContactMutation
    const addContactMutation = useMutation({
        mutationFn: ()=>{
          return addContact(formData,sessionStorage.getItem('user'))
        },
        onSuccess:(data)=>{
            queryClient.invalidateQueries(['contacts'])
            toast.success(`Contact Added Successfully`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        },
        onError:(message)=>{
            toast.error(`Contact Already Exists`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        if(name==='contactNumber'){
            if(value.length===10 && validator.isMobilePhone(value)){
                setcontactState(true)
                toast.success('Valid Number', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
            else{
                setcontactState(false)
            }
        }
        if(name ==='name'){
            if(value){
                setnameState(true)
            }
            else{
                setnameState(false)
            }
        }
        if(name ==='company'){
            if(value){
                setcompanyState(true)
            }
            else{
                setcompanyState(false)
            }
        }
        if(name ==='status'){
            if(value){
                setstatusState(true)
            }
            else{
                setstatusState(false)
            }
        }
    };

    const handleSubmit = (e) => {

        e.preventDefault(); 
        console.log(formData)
        // if(!formData.contactNumber || !formData.status || !formData.company || !formData.name){
        //     toast.warn('Enter the necessary details', {
        //         position: "top-right",
        //         autoClose: 4000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //         });
        // }
        if(formData.contactNumber.length!==10 || !validator.isMobilePhone(formData.contactNumber)){
            setcontactState(true)
            toast.warning('Invalid Details', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else{
            addContactMutation.mutate()
        }
    }
  return (
   <>
        <div className=''>
            <div className='container mx-auto'>
                <div className='flex flex-col py-12 px-12'>
                    <h3 className='text-xl mb-4 text-center text-[#00000]'>Add Contact</h3>
                    <form>
                        <div className='grid grid-cols-2 gap-2 '>
                            <input className={`placeholder-[#000000] rounded-md border py-1 px-2 ${nameState?'border-green':'border-red'} rounded `} placeholder='Name'
                            type='text' name='name' value={formData.name} onChange={handleChange} />
                            <input className={`placeholder-[#000000] rounded-md border py-1 px-2 ${contactState?'border-green':'border-red'} rounded`} placeholder='Contact Number'
                            type='text' name='contactNumber' value={formData.number} onChange={handleChange} />
                        </div>
                        <div className='mt-2'>
                            <input className={`placeholder-[#000000] rounded-md border py-1 px-2 ${companyState?'border-green':'border-red'} w-full rounded`} placeholder='Company Name'
                            type='text' name='company' value={formData.company} onChange={handleChange}/>
                        </div>
                        <div className='mt-2'>
                            <input className='placeholder-[#000000] rounded-md border py-1 px-2 border-[#A9A9A9] w-full rounded' placeholder='Email'
                            type='email' name='email' value={formData.email} onChange={handleChange}/>
                        </div>
                        <div className='grid grid-cols-2 gap-2 mt-2'>
                            <select name="status" id="status" className= {`py-1 px-2  ${statusState?'border border-green':'border border-red'} rounded`}
                            value={formData.status} onChange={handleChange}
                            >
                                <option className='text-color1 ' value='' disabled selected hidden>Choose Contact Status...</option>
                                <option value="notCalled">Not Called</option>
                                <option value="calledAccepted">Called/Accepted</option>
                                <option value="calledDeclined">Called/Declined</option>
                                <option value="calledNotReachable">Called/NotReachable</option>
                                <option value="calledPostponed">Called/Postponed</option>
                                <option value="emailedAccepted">Emailed/Accepted</option>
                                <option value="emailedAwaitingResponse">Emailed/AwaitingResponse</option>
                                <option value="emailedDeclined">Emailed/Declined</option>
                                <option value="wrongNumber">Wrong Number</option>

                            </select>
                            <select name="interviewMode" id="interviewMode" className='border py-1 px-2 border-[#A9A9A9] rounded'
                            value={formData.interviewMode} onChange={handleChange}
                            >
                                <option className='text-color1' value='' disabled selected hidden>Choose Interview Mode...</option>
                                <option value="notknown">Not Known</option>
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                                <option value="onlineOffline">Online/Offline</option>
                            </select>
                        </div>
                        <div className='flex mt-2'>
                            <input  id="HRCount" name="HRCount" type="number" placeholder='HR Count'
                            className=' placeholder-[#000000] border py-1 px-2 border-[#A9A9A9] rounded mr-2 w-1/4'
                            value={formData.HRCount} 
                            onChange={handleChange}
                            min={0}/>
                            <select name="transport" id="transport" 
                            className='border py-1 px-2 border-[#A9A9A9] rounded mr-2'
                            value={formData.transport} 
                            onChange={handleChange}>
                            <option className='text-color1' value='' disabled selected hidden>Transportation Mode...</option>
                            <option value="notknown">Not Known</option>
                            <option value="own">Own</option>
                            <option value="Cab">Cab</option>
                            </select>
                            <select name="internship" id="internship" 
                            className='border py-1 px-2 border-[#A9A9A9] rounded w-2/5'
                            value={formData.internship} 
                            onChange={handleChange}>
                                <option className='text-color1' value='' disabled selected hidden>Internship ...</option>
                                <option value="notknown">Not Known</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className='mt-2'>
                            <input className='placeholder-[#000000] rounded-md border py-2 px-2 border-[#A9A9A9] w-full rounded' placeholder='Address'
                            value={formData.address} onChange={handleChange} name='address' type='textbox'/>
                        </div>
                        <div className='mt-2'>
                            <input className='placeholder-[#000000] rounded-md border py-2 px-2 border-[#A9A9A9] w-full rounded' placeholder='Comments'
                            value={formData.comments} onChange={handleChange} name='comments' type='textbox'/>
                        </div>
                    </form>
                    <div className='flex items-center justify-center mt-5'>
                        <button disabled={!statusState || !nameState || !companyState || !contactState} className='bg-[#8EA7E9] text-[#000000]  focus:outine-none font-medium text-sm rounded-lg px-5 py-2.5 text-center w-full mx-2 hover:scale-95 duration-150'
                        type='submit' id ='submit' onClick={handleSubmit}>
                            Save Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default ContactForm

