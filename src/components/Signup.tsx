"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useRouter } from 'next/navigation';
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import useSignupStore from "@/Store/UserStore";

// Define the form data type
interface SignupFormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  username:String;
  Country:String;
}

export function SignupFormDemo() {
  const router = useRouter();
  const {isSeller ,user} = useSignupStore()

  // Initialize useForm hook
  const { register, watch, handleSubmit, formState: { errors } } = useForm<SignupFormData>();

  
  // Handle form submission
  const onSubmit: SubmitHandler<SignupFormData> = async(data) => {

    const formData = {
      ...data,
      isSeller,
    };
  
    
    console.log("Form data:", formData);
    try {
      const response = await fetch('http://localhost:8000/user/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
           credentials: 'include'
      });
  
      // if (!response.ok) {
      //     // Handle HTTP errors (e.g., 4xx or 5xx responses)
      //     throw new Error(`eeror : ${response.status}`);
 

  
      const result = await response.json(); // Assuming the server returns a JSON response
      console.log(result.User);
      // console.log(result.status)
      // user(result.User) // Handle the result as needed

      if (response.status === 201) {
      router.push("/Signup/Signup2/registration");
      }
      if (!response.status === 200) {
        console.log(response.message)
        }
  
  } catch (error) {
      console.error('There was an error with the fetch operation:', error);
  }
  
  };

  return (
    <BackgroundBeamsWithCollision >
      <div className="w-[50%]  bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 shadow-lg mb-5 mt-28  mx-auto border-black rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input  dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to HexaBite
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Login to Hexabite if you want to monetize your Talent
        </p>

        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Amar"
                type="text"
                {...register("firstname", { required: "First name is required" })}
              />
              {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Lodhi"
                type="text"
                {...register("lastname", { required: "Last name is required" })}
              />
              {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="@Amar"
                type="text"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="username">Country</Label>
              <Input
                id="Country"
                placeholder="eg.India"
                type="text"
                {...register("Country", { required: "Country is required" })}
              />
              {errors.Country && <p className="text-red-500 text-sm">{errors.Country.message}</p>}
            </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input
              id="confirmPassword"
              placeholder="••••••••"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </button>
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
            </button>
              <BottomGradient />
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
            >
              <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                OnlyFans
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
