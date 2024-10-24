import React, {useState } from 'react'
import{useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { toast } from 'react-toastify'
import validator from 'validator'

import {updateContact, getContact} from '../features/contacts/ContactServices' 
import { getUsers,getDirectors } from '../features/users/UserServices'

function UpdateContactForm(currentUserID,onClose) {
    const [userId,setUserId] = useState(currentUserID.currentUserID)
    // const [teamSplit,setMyTeamSplit]=useState({})

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
        // department:'',
        volunteer:'',
        incharge:'',
        comments:''
    })
    const [contactState, setcontactState] = useState(true)
    const [companyState, setcompanyState] = useState(true)
    const [statusState, setstatusState] = useState(true)
    const [nameState, setnameState] = useState(true)

    let usersMap={}
    // let myteam
    //Get My Team
    const getDirectorsQuery = useQuery({
        queryKey:['directors'],
        queryFn: ()=>{
            return getDirectors(sessionStorage.getItem('user'))
        },
    })
   
    //Get Users
    const getUserQuery = useQuery({
        queryKey:['users'],
        queryFn: ()=>{
            return getUsers(sessionStorage.getItem('user'))
        },
        enabled:false
    })

    if(sessionStorage.getItem('role') ==='Director'){
        getUserQuery.refetch()
        
        if(getUserQuery.isLoading){
            // <Spinner/>
        }
        else if(getUserQuery.isFetched){
            // console.log(getUserQuery.data.users)
            getUserQuery.data.users.map((user)=>{
                usersMap[user.email.substring(0,user.email.length-10)]=user._id
                // return null;
            })
        }
    }
    // Update Contacts
    const updateContactMutation = useMutation({
        mutationFn:()=>{
            return updateContact(currentUserID.currentUserID,
                formData,sessionStorage.getItem('user'))
        },
        onSuccess: () =>{
            // Object.keys(responseData).forEach(v => responseData[v] = 0)
            queryClient.invalidateQueries(["contacts"])
            queryClient.invalidateQueries(["teamcontacts"])
            queryClient.invalidateQueries(["globalContacts"])
            toast.success(`Contact Updated Successfully`, {
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
    // Get Contact
    const getContactQuery = useQuery({
        queryKey:['contact',currentUserID],
        queryFn:()=>{
            return getContact(currentUserID.currentUserID,sessionStorage.getItem('user'))
        },
        // enabled:false
        enabled: !!userId,
        // refetchOnMount:false,
        // refetchInterval: 2000,
    })
    getContactQuery.remove()
    // if(!getContactQuery.isFetched || getContactQuery.isError)
    //     // getContactQuery.refetch()
    // {}
    if(getContactQuery.isLoading || getContactQuery.isFetching){
        // console.log("Loading")
    }
    else{
        // console.log(userId)
        setUserId(null)    
        // console.log(getContactQuery.data)
        const currentState = {
            name:getContactQuery.data.name,
            company:getContactQuery.data.company,
            contactNumber:getContactQuery.data.contactNumber,
            email:getContactQuery.data.email,
            status:getContactQuery.data.status,
            interviewMode:getContactQuery.data.interviewMode,
            HRCount:getContactQuery.data.HRCount,
            transport:getContactQuery.data.transport,
            address:getContactQuery.data.address,
            internship:getContactQuery.data.internship,
            comments:getContactQuery.data.comments,
        }
        setFormData(currentState)
    }

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
        if(!formData.contactNumber.length===10 && !validator.isMobilePhone(formData.contactNumber)){

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
            updateContactMutation.mutate()
        }
    }
    
  return (
   <>
        <div className=''>
            <div className='container mx-auto'>
                <div className='flex flex-col py-12 px-12'>
                    <h3 className='text-xl mb-4 text-center text-[#000000]'>Update Contact</h3>
                    <form>
                        <div className='grid grid-cols-2 gap-2'>
                            
                            <input className={`placeholder-[#000000] rounded-md border py-1 px-2 ${nameState?'border-green':'border-red'} rounded `} placeholder='Name'
                            type='text' name='name' value={formData.name} onChange={handleChange} />
                           <input className={`placeholder-[#000000] rounded-md border py-1 px-2 ${contactState?'border-green':'border-red'} rounded`} placeholder='Contact Number'
                            type='text' name='contactNumber' value={formData.contactNumber} onChange={handleChange} />
                        </div>
                        <div className='mt-2'>
                            <input className={`placeholder-[#000000] rounded-md border py-1 px-2 ${companyState?'border-green':'border-red'} w-full rounded`} placeholder='Company Name'
                            type='text' name='company' value={formData.company} onChange={handleChange}/>
                        </div>
                        <div className='mt-2'>
                            <input className='border border py-1 px-2 border-[#A9A9A9] w-full rounded' placeholder='Email'
                            type='email' name='email' value={formData.email} onChange={handleChange}/>
                        </div>
                        <div className='grid grid-cols-2 gap-2 mt-2'>
                        <select name="status" id="status" className= {`py-1 px-2  ${statusState?'border border-green':'border border-red'} rounded`}
                            value={formData.status} onChange={handleChange}
                            >
                                <option value='' disabled selected hidden>Choose Contact Status...</option>
                                <option value="notCalled">Not Called</option>
                                <option value="calledAccepted">Called/Accepted</option>
                                <option value="calledDeclined">Called/Declined</option>
                                <option value="calledPostponed">Called/Postponed</option>
                                <option value="calledNotReachable">Called/NotReachable</option>
                                <option value="emailedAccepted">Emailed/Accepted</option>
                                <option value="emailedAwaitingResponse">Emailed/AwaitingResponse</option>
                                <option value="emailedDeclined">Emailed/Declined</option>
                                <option value="blacklisted">Blacklisted</option>
                                <option value="wrongNumber">Wrong Number</option>


                            </select>
                            <select name="interviewMode" id="interviewMode" className='border py-1 px-2 border-[#A9A9A9] rounded'
                            value={formData.interviewMode} onChange={handleChange}
                            >
                                <option value='' disabled selected hidden>Choose Interview Mode...</option>
                                <option value="notknown">Not Known</option>
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                                <option value="onlineOffline">Online/Offline</option>
                            </select>
                        </div>
                        <div className='flex mt-2'>
                            <input id="HRCount" name="HRCount" type="number" placeholder='HR Count'
                            className='border py-1 px-2 border-[#A9A9A9] rounded mr-2 w-1/4'
                            value={formData.HRCount} 
                            onChange={handleChange}
                            min={0}
                            />
                            <select name="transport" id="transport" 
                            className='border py-1 px-2 border-[#87acec] rounded mr-2'
                            value={formData.transport} 
                            onChange={handleChange}
                            >
                            <option value='' disabled selected hidden>Transportation Mode...</option>
                            <option value="notknown">Not Known</option>
                            <option value="own">Own</option>
                            <option value="Cab">Cab</option>
                            </select>
                            <select name="internship" id="internship" 
                            className='border py-1 px-2 border-[#87acec] rounded w-2/5'
                            value={formData.internship} 
                            onChange={handleChange}
                            >
                                <option value='' disabled selected hidden>Internship ...</option>
                                <option value="notknown">Not Known</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        
                        <div className='mt-2'>
                            <input className='border border py-2 px-2 border-[#A9A9A9] w-full rounded' placeholder='Address'
                            value={formData.address} onChange={handleChange} name='address' type='textbox'/>
                        </div>
                        <div className='mt-2'>
                            <input className='border border py-2 px-2 border-[#A9A9A9] w-full rounded' placeholder='Comments'
                            value={formData.comments} onChange={handleChange} name='comments' type='textbox'/>
                        </div>
                        {/* {
                            sessionStorage.getItem('role')==='Director'?
                            <div className='grid grid-cols-2 gap-2 mt-2'>
                            <select name="incharge" id="incharde" className='border py-1 px-2 border-[#A9A9A9] rounded'
                            value={formData.incharge} onChange={handleChange}
                            >
                                <option value='' disabled selected hidden>Choose ED Incharge...</option>
                                <option  value={usersMap['eashwar']}>Eashwar</option>
                                <option value={usersMap['aakash']}>Aakash</option>
                            </select>
                            <select name="volunteer" id="volunteer" className='border py-1 px-2 border-[#A9A9A9] rounded'
                            value={formData.volunteer} onChange={handleChange}
                            >
                                <option value='' disabled selected hidden>Choose POC...</option>
                                <option value={usersMap['ramanathan']}>Ramanathan</option>
                                <option value={usersMap['shreya']}>Shreya</option>
                                <option value={usersMap['auser']}>Auser</option>
                                <option value={usersMap['euser']}>Euser</option>

                            </select>
                            </div>
                            :<></>
                        } */}
                    </form>
                    <div className='flex items-center justify-center mt-5'>
                        {/* <button className='bg-[#A9A9A9] hover:scale-95 focus:outine-none font-medium text-sm rounded-lg px-5 py-2.5 text-center w-full mx-2'
                        type='submit' onClick={handleSubmit}>
                            Save Contact
                        </button> */}
                        <button disabled={!statusState || !nameState || !companyState || !contactState} className='bg-[#8EA7E9] text-[#000000] focus:outine-none font-medium text-sm rounded-lg px-5 py-2.5 text-center w-full mx-2 hover:scale-95'
                        type='submit' id = 'submit' onClick={handleSubmit}>
                            Update Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}
export default UpdateContactForm
