import React from 'react'
import Link from 'next/link'
function User2() {
  return (
    <div> 
      <h1 className='bg-blue-500 font-bold text-center'>User2</h1>
      <br/>
      
      <Link href="/user-1" className='bg-green-500 font-bold flex justify-center'>User-1</Link>
      <br/>
      <Link href="/user-2" className='bg-purple-500 font-bold flex justify-center'>User-2</Link>

      <br/>
        <h3 className='bg-blue-500 font-bold text-center'>Name : Kulsoom Kashmeri</h3>
        <h3 className='bg-blue-500 font-bold text-center'>Course : Next.js</h3>
        <h3 className='bg-blue-500 font-bold text-center'>Course : Tailwind CSS</h3>
        <h3 className='bg-blue-500 font-bold text-center'>Course : Figma</h3>
        <h3 className='bg-blue-500 font-bold text-center'>Course : UI Design</h3>
        <h3 className='bg-blue-500 font-bold text-center'>Course : AI</h3>

    </div>
  )
}

export default User2