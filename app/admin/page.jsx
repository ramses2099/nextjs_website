"use client";

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
}

export default function AdminView() {
 const[currentSelectedTab, setCurrentSelectedTab] = useState('home'); 
 const[homeViewFormData, sethomeViewFormData] = useState(initialHomeFormData);
 
 const menuItem = [
    {
      id:'home',
      label: 'Home',
      componet: <AdminHomeView 
      formData={homeViewFormData}
      setFormData={sethomeViewFormData}
      />
    },
    {
      id:'about',
      label: 'About',
      componet: <AdminAboutView/>
    },
    {
      id:'experience',
      label: 'Experience',
      componet: <AdminExperienceView/>
    },
    {
      id:'education',
      label: 'Education',
      componet: <AdminEducationView/>
    },
    {
      id:'project',
      label: 'Project',
      componet: <AdminProjectView/>
    },
    {
      id:'contact',
      label: 'Contact',
      componet: <AdminContactView/>
    }
 ]

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
