"use client"

import React from 'react'
import Link from 'next/link';
import {useRouter} from "next/navigation"
function Login() {
const router = useRouter();
  return (
    <div>
        <h1 className='bg-purple-500 font-bold text-center'>Group Routing<br/>LogIn</h1>
        
        <br/>
        <Link href="/login" className='bg-pink-600 font-bold flex justify-center'>Go to Login page</Link>
  
        <br/>
        <Link href="/signup" className='bg-pink-600 font-bold flex justify-center'>Go to SignUp page</Link>
        <br/>

    <button onClick={()=>router.push("/signup")} className='<button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>'>SignUp</button>
    </div>
  )
}

export default Login