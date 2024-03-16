"use client"

import { signIn, useSession } from 'next-auth/react'
import React from 'react'

 function Mbutton() {
  // const session = await useSession()
  return (
    <button className='mainbutton ml-[25%] text-white bg-black mt-14' onClick={()=>{signIn()}}>Get Started!</button>
  )
}

export default Mbutton