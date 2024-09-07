"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandStorytel,
  IconBriefcase2,
  IconHexagonPlus,
  IconMessageCircle,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ProfilePage from "./ProfilePage";
import MessagesPage from "./MessagesPage";
import JobsPage from "./JobsPage";
import GigsPage from "./GigsPage";
import CreateGigPage from "./CreateGigPage";
import useUserStore from "@/Store/UserStore";
import { ScrollArea } from "./ui/scroll-area";

export function SidebarDemo() {
  const { user } = useUserStore();
  const pathname = usePathname(); // Get the current route

  // Conditionally render components based on route
  const renderComponent = () => {
    switch (pathname) {
      case "/home/profile":
        return <ProfilePage />;
      case "/home/message":
        return <MessagesPage />;
      case "/home/jobs":
        return <JobsPage />;
      case "/home/usergigs":
        return <GigsPage />;
      case "/home/creategig":
        return <CreateGigPage />;
      default:
        return <ProfilePage />; // Default component
    }
  };

  const links = [
    {
      label: "Messages",
      href: "/home/message",
      icon: (
        <IconMessageCircle
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/home/message" ? "text-white" : "text-neutral-700"
          }`}
        />
      ),
    },
    {
      label: "Profile",
      href: "/home/profile",
      icon: (
        <IconUserBolt
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/home/profile" ? "text-white" : "text-neutral-700"
          }`}
        />
      ),
    },
    {
      label: "Jobs",
      href: "/home/jobs",
      icon: (
        <IconBriefcase2
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/home/jobs" ? "text-white" : "text-neutral-700"
          }`}
        />
      ),
    },
    {
      label: "My Gigs",
      href: "/home/usergigs",
      icon: (
        <IconBrandStorytel
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/home/usergigs" ? "text-white" : "text-neutral-700"
          }`}
        />
      ),
    },
    {
      label: "Create Gig",
      href: "/home/creategig",
      icon: (
        <IconHexagonPlus
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/home/creategig" ? "text-white" : "text-neutral-700"
          }`}
        />
      ),
    },
  ];

  const logout = {
    label: "Logout",
    href: "#",
    icon: (
      <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  };

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex mt-[-30px] flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-screen flex-1 fixed mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen w-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between h-screen gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={cn(
                    "flex items-center gap-2 p-1 rounded-lg", // Default classes
                    pathname === link.href
                      ? "bg-slate-500 text-white" // Active link styling
                      : "text-neutral-700 dark:text-neutral-200" // Default styling
                  )}
                />
              ))}

              <SidebarLink link={logout} onClick={() => console.log("logout")} />
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: user.firstname,
                href: "#",
                icon: (
                  <Image
                    src="https://flowbite.com/docs/images/logo.svg" // Replace with your actual image path or URL
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <div className="flex flex-1">
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full">
          <ScrollArea className="h-screen border border-black rounded-lg">
            {renderComponent()}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
