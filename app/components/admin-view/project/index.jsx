"use client";

import FormControls from "../form-controls";

const controls =[
  {
    name:"name",
    placeholder:"Project Name",
    type:"text",
    label:"Project Name",    
  },
  {
    name:"website",
    placeholder:"Website",
    type:"text",
    label:"Website",     
  },
  {
    name:"technologies",
    placeholder:"Technologies",
    type:"text",
    label:"Technologies",      
  }, 
  {
    name:"github",
    placeholder:"Github",
    type:"text",
    label:"Github",      
  },
 
]
export default function AdminProjectView({formData, setFormData, handleSaveData}) {
  return <div className="w-full" >
            <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <FormControls controls={controls} 
              formData={formData} 
              setFormData={setFormData}
              />
              <button className="mt-[5px] border border-blue-600 bg-blue-600
              text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md"
              onClick={()=>handleSaveData('project')}>
                  Add Project
                  </button>
            
            </div>
          </div>;
}
