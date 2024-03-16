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

async function page() {
    const course= await prisma.course.findMany();
    return (
        <div className='m-6'>
            <div className=' flex flex-wrap justify-center'>
            {course.map((course)=>{
                return(
                    <Card key={course.id} className='w-1/3 pr-2 mb-8 mx-10'>
                <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription className=''>{course.description} </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className='text-md ' >
                        Enroll
                        <div className='pl-1'>
                            <ArrowRight />
                        </div>
                    </Button>
                </CardFooter>
            </Card>
                )
            })}
            </div>
           
        </div>
    )
}

export default page