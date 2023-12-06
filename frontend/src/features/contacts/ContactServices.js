import axios from "axios";
const API_URL = 'http://localhost:5000/api/database/'

export const listContacts = async(token)=>{
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL,config)
    // console.log(response.data.contacts)
    // console.log(response.data.contacts[0])
    return response.data
}
export const getContact = async(contactId,token)=>{
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await axios.get(API_URL+contactId,config)
    // console.log(response.data)
    return response.data
}
export const globalListContacts = async(token)=>{
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  }
  
  const response = await axios.get(API_URL+'list/globalHR',config)
  // console.log(response.data)
  // console.log(response.data.contacts)
  // console.log(response.data.contacts[0])
  return response.data
}
export const addContact = async(contactData,token)=>{
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(API_URL,contactData,config)
    // console.log(response.data)
    return response.data
}
export const updateContact = async(contactID,contactData,token)=>{
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  }
  const response = await axios.put(API_URL+contactID,contactData,config)
  // console.log(response.data)
  return response.data
}
export const deleteContact = async(contactId,token)=>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URL+contactId,config)
  // console.log(response.data)
  return response.data
}

export const FileUpload = async(formData,token)=>{
	const config = {
		headers: {
    		Authorization: `Bearer ${token}`,
    	},
  	}
	const response = await axios.post(API_URL+'upload',formData,config)
	// console.log(response.data)
	return response.data
}











// export const transferContact = async(contactID,contactData,token)=>{
//   // console.log(contactID)
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }
//     const response = await axios.put(API_URL+'/transfer/'+contactID,contactData,config)
//     // console.log(response.data)
//     return response.data
// }
