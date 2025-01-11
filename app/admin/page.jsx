"use client";

import { addData } from "@/services";
import { useState } from "react";
import AdminAboutView from "../components/admin-view/about";
import AdminContactView from "../components/admin-view/contact";
import AdminEducationView from "../components/admin-view/education";
import AdminExperienceView from "../components/admin-view/experience";
import AdminHomeView from "../components/admin-view/home";
import AdminProjectView from "../components/admin-view/project";

const initialHomeFormData = {
  heading:"",
  summary:""
};

const initialAboutFormData = {
  aboutme:"",
  noofprojects:"",
  yearofexperience:"",
  noofclients:"",
  skills:"",
};

const initialExperienceFormData = {
  position:"",
  company:"",
  duration:"",
  location:"",
  jobprofile:"",
};

const initialEducationFormData = {
  degree:"",
  year:"",
  college:"",
};

const initialProjectFormData = {
  name:"",
  website:"",
  technologies:"",
  github:""
};


export default function AdminView() {
 const[currentSelectedTab, setCurrentSelectedTab] = useState('home'); 
 const[homeViewFormData, sethomeViewFormData] = useState(initialHomeFormData);
 const[aboutViewFormData, setaboutViewFormData] = useState(initialAboutFormData);
 const[experienceViewFormData, setexperienceViewFormData] = useState(initialExperienceFormData);
 const[educationViewFormData, seteducationViewFormData] = useState(initialEducationFormData);
 const[projectViewFormData, setprojectViewFormData] = useState(initialProjectFormData);
 

 const menuItem = [
    {
      id:'home',
      label: 'Home',
      componet: <AdminHomeView 
      formData={homeViewFormData}
      setFormData={sethomeViewFormData}
      handleSaveData={handleSaveData}
      />
    },
    {
      id:'about',
      label: 'About',
      componet: <AdminAboutView
      formData={aboutViewFormData}
      setFormData={setaboutViewFormData}
      handleSaveData={handleSaveData}
      />
    },
    {
      id:'experience',
      label: 'Experience',
      componet: <AdminExperienceView
      formData={experienceViewFormData}
      setFormData={setexperienceViewFormData}
      handleSaveData={handleSaveData}
      />
    },
    {
      id:'education',
      label: 'Education',
      componet: <AdminEducationView
      formData={educationViewFormData}
      setFormData={seteducationViewFormData}
      handleSaveData={handleSaveData}
      />
    },
    {
      id:'project',
      label: 'Project',
      componet: <AdminProjectView
      formData={projectViewFormData}
      setFormData={setprojectViewFormData}
      handleSaveData={handleSaveData}
      />
    },
    {
      id:'contact',
      label: 'Contact',
      componet: <AdminContactView/>
    }
 ]

 async function handleSaveData(args) {
  console.log(args);
  
  const dataMap = {
    home: homeViewFormData,
    about: aboutViewFormData,
    experience: experienceViewFormData,
    education: educationViewFormData,
    project: projectViewFormData,
  }

  const response = await addData(currentSelectedTab, dataMap[currentSelectedTab]);
  
  console.log(response,"response");

 }

  return (
    <div className="border-b border-gray-400">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItem.map(item => (
          <button key={item.id} 
          type="button"
          className="p-4 font-bold text-xl text-black"
          onClick={()=>{
            setCurrentSelectedTab(item.id);
          }} >
            {item.label}
          </button>          
        ))}
      </nav>
      <div className="mt-10 p-10">
        { 
          menuItem.map(item => item.id === currentSelectedTab && item.componet) 
        }
      </div>

    </div>);
}
