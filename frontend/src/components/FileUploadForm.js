import React, { useState,useEffect } from 'react';
import Papa from 'papaparse'

import { FileUpload } from '../features/contacts/ContactServices';
import{ useMutation, useQueryClient} from '@tanstack/react-query'
import { useNavigate } from "react-router-dom"


const FileUploadForm = () => {
  const navigate = useNavigate()

    useEffect(()=>{
        if(!sessionStorage.getItem('user')){
          navigate('/login')
        //   setResponseData(null)
        }
      },[]);
    
  const queryClient = useQueryClient()
  const [file, setFile] = useState(null);
  const [CSVData, setCSVData] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const fileUploadMutation = useMutation({
    mutationFn: ()=>{
      return FileUpload(CSVData,sessionStorage.getItem('user'))
    },
    onSuccess:(data)=>{
      //Object.keys(responseData).forEach(v => responseData[v] = 0)
      queryClient.invalidateQueries(['contacts'])

    }
})

  const handleUpload = () => {
    if (file) {
        // console.log(file);
        Papa.parse(file, {
            complete: function(results) {
              let CData = results.data
              delete CData['0']
              console.log("Finished:", CData);
              // console.log("Finished");
              setCSVData(CData)
              console.log(CSVData)

              fileUploadMutation.mutate()
            }}
          )
      }
  };
  
  return (
    <>
        <div className=''>
            <div className='container mx-auto z-90'>
                <div className='flex flex-col py-12 px-12'>
                    <h3 className='text-xl font-bold text-[#000000] mb-4 text-center'>Upload CSV or Excel</h3>
                   
                    <div className='flex items-center justify-center mt-5'>
                        <input id = "myfile" name="myfile" type="file" accept=".xls, .xlsx, .csv" onChange={handleFileChange} className=' font-medium text-sm rounded-lg px-5 py-2.5 text-center w-full mx-2'/>

                        <button onClick={handleUpload} className='bg-[#8EA7E9] hover:scale-95 focus:outine-none font-medium text-sm rounded-lg px-5 py-2.5 text-center w-full mx-2'
                        id='submit' >
                            Upload File
                        </button>
                    </div>
                </div>
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
