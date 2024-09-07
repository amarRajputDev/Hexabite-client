"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import useUserStore from "@/Store/UserStore";

// Define the form data type
interface RegistrationFormData {
  certifications: {certname:string ; issuer:string; year:string};
  projects: { name: string; description: string }[];
  experience: string;
  skills: string[];
  education: string;
  about: string;
}

export function RegistrationForm() {
  const router = useRouter();
  const {setUser} = useUserStore()

  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();

  const [certifications, setCertifications] = useState<{ certname: string; issuer: string; year: string }[]>([{ certname: "", issuer: "", year: "" }]);

  const [projects, setProjects] = useState<{ name: string; description: string }[]>([{ name: "", description: "" }]);
  const [skills, setSkills] = useState<string[]>([""]);

  // Add fields dynamically
  const addCertificationField = () => setCertifications([...certifications, { certname: "", issuer: "", year: "" }]);

  const addProjectField = () => setProjects([...projects, { name: "", description: "" }]);
  const addSkillField = () => setSkills([...skills, ""]);

  // Handle form submission
  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    // Prepare the form data
    const formData = {
      certifications,
      projects,
      skills,
      experience: data.experience,
      education: data.education,
      about: data.about,
    };

    console.log(formData)
  
    try {
      // Send a POST request with the form data
      const response = await fetch('http://localhost:8000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Ensure the server knows to expect JSON
        },
        body: JSON.stringify(formData),
        credentials: 'include', // Ensure cookies are included if needed for authentication
      });

      // Parse the JSON response
      const result = await response.json();
      console.log(result);
  
      // Check if the response is successful
      if (response.status === 200) {
        setUser(result.user)
        router.push("/home/profile")
      }
  
  
      
  
    } catch (error) {
      // Handle any errors that occur during the fetch request
      console.error('There was an error submitting the form:', error);
    }
  };
  

  return (
    <div className="w-[50%]  bg-black  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 mt-20 shadow-2xl mb-5 mx-auto border border-black rounded-lg p-8  dark:bg-black">
      <h2 className="font-extrabold text-2xl text-center text-neutral-800 dark:text-neutral-200">Complete Your Profile</h2>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        {/* Certifications */}
        <div className="mb-4 w-full">
        <Label>Certifications</Label>
        {certifications.map((cert, index) => (
          <div key={index} className="space-y-2 mb-2">
            <Input
              placeholder="Certification name"
              value={cert.certname}
              onChange={(e) => {
                const newCertifications = [...certifications];
                newCertifications[index].certname = e.target.value;
                setCertifications(newCertifications);
              }}
            />
            <Input
              placeholder="Issuer"
              value={cert.issuer}
              onChange={(e) => {
                const newCertifications = [...certifications];
                newCertifications[index].issuer = e.target.value;
                setCertifications(newCertifications);
              }}
            />
            <Input
              placeholder="Year"
              type="number"
              value={cert.year}
              onChange={(e) => {
                const newCertifications = [...certifications];
                newCertifications[index].year = e.target.value;
                setCertifications(newCertifications);
              }}
            />
          </div>
        ))}
          <button type="button" className="text-white bg-slate-500 rounded-lg p-3" onClick={addCertificationField}>
            + Add Certification
          </button>
        </div>

        {/* Projects */}
        <div className="mb-4">
          <Label>Projects</Label>
          {projects.map((project, index) => (
            <div key={index} className="space-y-2 mb-4">
              <Input
                placeholder="Project name"
                value={project.name}
                onChange={(e) => {
                  const newProjects = [...projects];
                  newProjects[index].name = e.target.value;
                  setProjects(newProjects);
                }}
              />
              <Input
                placeholder="Project description"
                value={project.description}
                onChange={(e) => {
                  const newProjects = [...projects];
                  newProjects[index].description = e.target.value;
                  setProjects(newProjects);
                }}
              />
            </div>
          ))}
          <button type="button" className="text-white bg-slate-500 rounded-lg p-3" onClick={addProjectField}>
            + Add Project
          </button>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <Label>Skills</Label>
          {skills.map((skill, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <Input
                placeholder="Skill"
                value={skill}
                onChange={(e) => {
                  const newSkills = [...skills];
                  newSkills[index] = e.target.value;
                  setSkills(newSkills);
                }}
              />
            </div>
          ))}
          <button type="button" className="text-white bg-slate-500 rounded-lg p-3" onClick={addSkillField}>
            + Add Skill
          </button>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <Label htmlFor="experience">Experience</Label>
          <Input
            id="experience"
            placeholder="Your work experience in years"
            type="number"
            {...register("experience", { required: "Experience is required" })}
          />
          {errors.experience && <p className="text-red-500">{errors.experience.message}</p>}
        </div>

        {/* Education */}
        <div className="mb-4">
          <Label htmlFor="education">Education</Label>
          <Input
            id="education"
            placeholder="Your education"
            type="text"
            {...register("education", { required: "Education is required" })}
          />
          {errors.education && <p className="text-red-500">{errors.education.message}</p>}
        </div>

        {/* About Yourself */}
        <div className="mb-4">
          <Label htmlFor="about">About Yourself</Label>
          <textarea
            id="about"
            placeholder="Tell us about yourself"
            className="w-full p-2 border rounded-md"
            {...register("about", { required: "This field is required" })}
          />
          {errors.about && <p className="text-red-500">{errors.about.message}</p>}
        </div>

        <button
          className="relative group/btn bg-gradient-to-br from-black to-neutral-600 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
          type="submit"
        >
          Submit
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

// BottomGradient Component
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
