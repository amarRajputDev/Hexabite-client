"use client"; // Ensure client-side rendering

import React, { useEffect } from "react";
import profile from "../../public/profile.png";
import Image from "next/image";
import useUserStore from "@/Store/UserStore";
import { ScrollArea } from "@/components/ui/scroll-area"



function ProfilePage() {
  const {setUser , user} = useUserStore()

  

  useEffect(() => {
    const fetchdata = async() =>{
      const response = await fetch('http://localhost:8000/user/getdata', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        
         credentials: 'include'
    });

    const result = await response.json(); // Assuming the server returns a JSON response
      console.log(result.userdata);
      setUser(result.userdata)

    }
    fetchdata()
    // console.log(user)
  }, [])
  
  // useEffect(() => {
  //   console.log("user data --->"+user.firstname)
  // }, [user])
  

  return (
    
    <div className="w-full mx-auto ">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <div className="flex items-center space-x-6">
          <Image
            src={profile} // Replace with the correct path or URL
            alt="Profile Picture"
            width={150}
            height={150}
            className="profile-pic rounded-full"
          />
          <div>
            <h1 className="text-3xl font-semibold">{user.firstname + " " + user.lastname || "Loading" }</h1>
            {/* <p className="text-gray-600">{user.jobTitle}</p> */}
            <p className="text-gray-500">{user.email}</p>
            <p className="text-blue-600">@{user.username}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-700">{user.about}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-4">
            {user.projects != null  ? (
              user.projects.map((project:any, index:any) => (
                <li key={index} className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </li>
              ))
            ) : (
            
                  <h3 className="text-lg font-semibold">No Project</h3>
                
                
            )}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <ul className="space-y-4  ">
            {/* {user.education? (
              user.education.map((edu:any, index:any) => ( */}
                {/* <li  className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">{edu.institution}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                  <p className="text-gray-500">{edu.year}</p>
                </li> */}
              {/* ))
            ) : (
              <li  className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">No Education Info</h3>
                  
                </li>
            )
            } */}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Certificates</h2>
          <ul className="space-y-4">
            {user.certifications?(
              user.certifications
              .map((cert:any, index:any) => (
                <li key={index} className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">{cert.certname}</h3>
                  <p className="text-gray-600">Issued by: {cert.issuer}</p>
                  <p className="text-gray-500">{cert.year}</p>
                </li>
              ))
            ):(
              <li  className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">No Certificates</h3>
            
                </li>
            )
            }
          </ul>
        </div>
      </div>
    </div>
  
  );
}

export default ProfilePage;
