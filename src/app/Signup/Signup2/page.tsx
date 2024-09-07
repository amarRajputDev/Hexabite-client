import { SignupFormDemo } from '@/components/Signup';
import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <div className="relative">
      {/* <div className="w-screen h-screen  fixed z-[-1]">
        <Image
          src="/back2.jpg"
          alt="Background"
          fill // This replaces the deprecated layout="fill"
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
      </div> */}

        <SignupFormDemo />
   
    </div>
  );
}

export default Page;
