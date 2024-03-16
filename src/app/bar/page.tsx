"use client"

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { useRouter } from 'next/navigation'
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Link from 'next/link'
  

async function page() {
    const route= useRouter();
    const session= await getServerSession(authOptions);
  return (
    <div>
        <div>
        <Breadcrumb>
  <BreadcrumbList>
    
    <BreadcrumbItem>
    <BreadcrumbLink asChild>
        <Link href="/">Home</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />
    
  </BreadcrumbList>
</Breadcrumb>
        </div>

        <div>  
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        </div>

    </div>
  )
}

export default page