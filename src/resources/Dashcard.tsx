import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react';
import prisma from '@/lib/db/prisma';  

async function Dashcard() {
    const courses = await prisma.course.findMany()
  return (
    <div className='box '>
      

    </div>
  )
}

export default Dashcard