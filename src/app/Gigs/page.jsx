"use client";
import { FollowingPointerDemo } from '@/components/Hovercard';
import React from 'react';
import project from "../../../public/project.jpg"
import profile from "../../../public/profile.png"
import SimpleNav from '@/components/SimpleNav';

function Page() {
  const count = [
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
    {
      imgae : project,
      Title : "I am open to work",
      discription : "i am experienced web developer",
      authorAvatar : profile,
      author : "Amar Lodhi",
      slug : "web Developer"
    },
   
  ];
  return (
    <div className='w-screen'>
      <SimpleNav  />
      

    <div className='max-w-screen flex flex-wrap gap-4 '>
      
      {count.map((con, index) => (
        <FollowingPointerDemo image={con.imgae} title={con.Title} description={con.discription} authorAvatar={con.authorAvatar} author={con.author} slug={con.slug} />
      ))}
    </div>
    </div>
  );
}

export default Page;


