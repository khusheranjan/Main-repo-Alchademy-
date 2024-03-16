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
    const chapter= await prisma.chapter.findMany();
    return (
        <div className='m-6'>
            <div className=' flex flex-wrap justify-center'>
            {chapter.map((chapter)=>{
                return(
                    <Card key={chapter.id} className='w-1/3 pr-2 mb-8 mx-10'>
                <CardHeader>
                    <CardTitle>{chapter.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                    <Button className='text-md ' >
                        Watch
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