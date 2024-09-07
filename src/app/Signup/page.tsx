"use client";

import SimpleNav from '@/components/SimpleNav';
import React, { useState } from 'react';
import { GoPerson } from "react-icons/go";
import { useRouter } from 'next/navigation';
import useSignupStore from "@/Store/UserStore"
import useUserStore from '@/Store/UserStore';

function Page() {
  const [selectedOption, setSelectedOption] = useState('');
  const {  setIsSeller } = useUserStore();
  const router = useRouter();

  // Handler for form submission
  const handleSubmit = (event:any) => {
    event.preventDefault(); 
    // console.log(isSeller);
    router.push('/Signup/Signup2');
  };
  
  // Handler for radio button changes
  const handleChange = (event:any) => {
    const option = event.target.value;
    setSelectedOption(option);
    if (option === 'Option 2') {
      setIsSeller(true);
    } else {
      setIsSeller(false);
    }
  };

  return (
    <div className='w-screen h-screen'>
      <SimpleNav />
      <div className='h-full w-full flex flex-col items-center justify-center'>
        <div className='flex items-center justify-evenly gap-9 flex-grow'>
          <div className='h-80 w-[400px] border flex items-center justify-center gap-6 border-green-600 rounded-lg'>
            <input
              type="radio"
              id="option1"
              name="options"
              value="Option 1"
              checked={selectedOption === 'Option 1'}
              onChange={handleChange}
              className="mr-2 size-5"
            />
            <label htmlFor="option1" className="text-3xl">I am Client</label>
            <GoPerson className='text-6xl text-slate-700' />
          </div>
          <div className='h-80 w-[400px] border flex items-center justify-center gap-6 border-green-600 rounded-lg'>
            <input
              type="radio"
              id="option2"
              name="options"
              value="Option 2"
              checked={selectedOption === 'Option 2'}
              onChange={handleChange}
              className="mr-2 size-5"
            />
            <label htmlFor="option2" className="text-3xl">I am Freelancer</label>
            <GoPerson className='text-6xl text-slate-700' />
          </div>
        </div>
        <button onClick={handleSubmit} className='w-[300px] mb-8 h-[50px] text-white bg-blue-700 rounded-md'>Submit</button>
      </div>
    </div>
  );
}

export default Page;
