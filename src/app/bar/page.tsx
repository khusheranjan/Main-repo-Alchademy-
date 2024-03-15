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
  

async function page() {
    const route= useRouter();
    const session= await getServerSession(authOptions);
  return (
    <div>
        <div>
        <Breadcrumb>
  <BreadcrumbList>

    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
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