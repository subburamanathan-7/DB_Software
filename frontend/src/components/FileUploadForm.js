import React, { useState,useEffect } from 'react';
import Papa from 'papaparse'

import { toast } from 'react-toastify'

import { FileUpload } from '../features/contacts/ContactServices';
import{ useMutation, useQueryClient} from '@tanstack/react-query'
import { useNavigate } from "react-router-dom"


const FileUploadForm = () => {
	const navigate = useNavigate()
	let arrayData=[],count=0;

    useEffect(()=>{
        if(!sessionStorage.getItem('user')){
          navigate('/login')
        //   setResponseData(null)
        }
    },[]);
    
	const queryClient = useQueryClient()
	const [file, setFile] = useState(null);

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
		toast.success(`File added, Click Submit to Upload`, {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};

	const fileUploadMutation = useMutation({
		mutationFn: ()=>{
			return FileUpload(arrayData,sessionStorage.getItem('user'))
		},
		onSuccess:(data)=>{
		queryClient.invalidateQueries(['contacts'])
		toast.success(`Contacts uploaded from sheets`, {
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
			toast.warn(`Many Existing Contacts`, {
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

	const handleUpload = () => {
		if (file) {
			// console.log(file);
			Papa.parse(file, {
				step: function(row) {
					// console.log("Row:", row.data);
					count++;
					if(count>1){
						// console.log(typeof(row.data))
						arrayData.push(row.data)
					}
				},
				complete: function(results) {
					// let CData = results.data
					// console.log(arrayData);
					// console.log("Finished");
					fileUploadMutation.mutate()
				}}
			)
		}
		else{
			toast.warn(`Select a file`, {
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
	};
  
  return (
    <>       
		<div className=''>
			<div class="flex flex-col items-center justify-center">
				<label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer m-[3%] h-[75%] ">
					<div class="flex flex-col items-center justify-center py-[4%]">
						<i class="fa-solid fa-upload"></i>
						<p class="mb-2 text-sm "><span class="font-semibold">Click to upload</span> or drag and drop</p>
						<p class="text-xs ">CSV, SpreadSheets</p>
					</div>
					<input id = "dropzone-file" className="hidden" name="myfile" type="file" accept=".xls, .xlsx, .csv" onChange={handleFileChange} />

				</label>
				<button onClick={handleUpload} className='bg-[#8EA7E9] hover:scale-95 focus:outine-none font-medium text-sm rounded-lg px-5 py-2.5 text-center w-full mx-2' id='submit' >
					Submit
				</button>
				

			</div> 
		</div>
    </>
  );
};

export default FileUploadForm;

// <div>
// <h2>Upload Excel or CSV File</h2>
// <input id = "myfile" name="myfile" type="file" accept=".xls, .xlsx, .csv" onChange={handleFileChange} />
// <button onClick={handleUpload}>Upload</button>
// </div>


// <div className=''>
// <div className='container mx-auto z-90'>
// 	<div className='flex flex-col py-12 px-12'>
// 		<h3 className='text-xl font-bold text-[#000000] mb-4 text-center'>Upload CSV or Excel</h3>
	   
// 		<div className='flex items-center justify-center mt-5'>
// 			<input id = "myfile" name="myfile" type="file" accept=".xls, .xlsx, .csv" onChange={handleFileChange} className=' font-medium text-sm rounded-lg px-5 py-2.5 text-center w-full mx-2'/>

			
// 		</div>
// 	</div>
// </div>
// </div>