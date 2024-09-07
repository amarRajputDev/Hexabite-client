import { Login } from '@/components/Login'
import SimpleNav from '@/components/SimpleNav'
// import { SignupFormDemo } from '@/components/Signup'
import React from 'react'

function page() {
  return (
            
    <div>
      <SimpleNav />
        <div className=' h-[80%] mt-3'>
      <Login />
        </div>
    </div>
  )
}
export default page
