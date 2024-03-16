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
// import { EnrollinCourse } from '../actions/EnrollCourse';
import EnrollButton from './EnrollButton';

async function page() {
    const courses= await prisma.course.findMany();
    
    return (
        <div className='m-6'>
            <div className=' flex flex-wrap '>
            {courses.map((course)=>{
                return(
                    <Card key={course.id} className='w-1/2 pr-2 mb-4'>
                <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription className=''>{course.description} </CardDescription>
                </CardHeader>
                <CardFooter>
                  <EnrollButton {...course}/>  
                </CardFooter>
            </Card>
                )
            })}
            </div>
           
        </div>
    )
}

export default page