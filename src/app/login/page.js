"use client"; 
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from "react"; 


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "0.7rem",
  },
};

export default function Login() {
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
    try {
      const response = await fetch('https://devapi.omacart.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      router.push('/dashboard')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="flex h-dvh font-sans">
      <section className="m-auto py-20 gap-x-96 h-full w-10/12 md:p-10 xl:pt-40">
        <div className="h-16 space-y-3">
          <h1 className="text-xl w-40 m-auto font-bold p-y-7 xl:font-extrabold">Welcome back</h1>
          <p className="text-sm font-thin tracking-wider pl-6 md:text-xs xl:px-56">
            Welcome back! Please enter your details.
          </p>
        </div>
        <div className="my-20 xl:w-7/12 m-auto">
        {error && <p style={{ color: 'red' }}>{error}</p>}
          <p className="text-sm">Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="border w-full h-10 px-3 rounded-md my-2 outline-none"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-sm">Password</p>
          <input
            type="password"
            placeholder="......."
            className="border w-full h-10 px-3 rounded-md my-2 font-extrabold outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex my-4 justify-between w-full">
            <div className="">
              <FormControlLabel
                control={
                  <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }} />
                }
                label="Remember for 30 days"
                className="-my-24"
                sx={formControlLabelStyle}
              />
            </div>
            <div>
              <Link href="/forgotpassword">
                <p className="text-xs py-1">Forgot password</p>
              </Link>
            </div>
          </div>
          <button onClick={handleLogin} className="bg-[#0077b3] cursor-pointer hover:bg-[#0088cc] text-white text-sm w-full h-9 rounded-md">
            Log in
          </button>
          <div className="flex justify-between w-9/12 text-xs m-auto my-10">
            <div>
              <p>Don&apos;t have an account? </p>
            </div>
            <Link href="/signup" className="text-[#0077b3]">Sign up</Link>
          </div>
        </div>
      </section>

      <section className="md:border">
      <Image
      className="md:block hidden h-full"
        src="/Login.png"
        width={1000}
        height={0}
        alt="login background image"
      />
      </section>
    </main>
  );
}