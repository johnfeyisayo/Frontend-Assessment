"use client"; 
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react"; 
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'




export default function Signup() {
    const router = useRouter()


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('https://devapi.omacart.com/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName: firstName, lastName: lastName, email, password })
          });
    
          if (!response.ok) {
            throw new Error('Failed to sign up');
          }
    
          const data = await response.json();
          router.push('/login')

        } catch (error) {
            redirect('/signup')
        }
      };

    return (
      <form className="flex h-dvh font-sans" onSubmit={handleSubmit}>
        <section className="">
        <Image
      className="md:block hidden h-full"
        src="/Signup.png"
        width={1200}
        height={0}
        alt="signup background image"
      />
      </section>

      <section className="m-auto py-20 gap-x-96 h-full w-10/12 md:p-10 xl:pt-40">
      <div className="h-16 space-y-3">
          <h1 className="text-xl w-40 font-bold xl:mx-36">Sign up</h1>
        </div>
        <div className="my-6 xl:w-7/12 m-auto">
          <p className="text-sm">First Name*</p>
          <input
            type="name"
            placeholder="Enter your name"
            className="border w-full h-10 px-3 rounded-md my-2 outline-none"
            id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}
          />
          <p className="text-sm">Last Name*</p>
          <input
            type="name"
            placeholder="Enter your name"
            className="border w-full h-10 px-3 rounded-md my-2 outline-none"
            id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}
          />
          <p className="text-sm">Email*</p>
          <input
            type="email"
            placeholder="enter your email"
            className="border w-full h-10 px-3 rounded-md my-2 outline-none"
            id="email" value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-sm">Password*</p>
          <input
            type="password"
            placeholder="create a password"
            className="border w-full h-10 px-3 rounded-md my-2 outline-none"
            d="password" value={password} onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type="submit" className="bg-[#0077b3] my-16 cursor-pointer hover:bg-[#0088cc] text-white text-sm w-full h-9 rounded-md">
            Get Started
          </button>
          <div className="flex justify-between w-9/12 text-xs m-auto">
            <div>
              <p>Already have an account? </p>
            </div>
            <Link href="/login" className="text-[#0077b3]">Log in</Link>
          </div>
        </div>
      </section>
      </form>

    
    );
  }

 
  
//   <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>