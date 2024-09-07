import { RegistrationForm } from '@/components/SellerInfo';
import React from 'react';
import Image from 'next/image';
// import back from './';

function Page() {
  return (
    <div className="relative">
      <div className="w-screen h-screen mt-[-50px]  fixed z-[-1]">
        <Image
          src="/back.jpg"
          alt="Background"
          fill // This replaces the deprecated layout="fill"
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
      </div>
      <RegistrationForm />
    </div>
  );
}

export default Page;
