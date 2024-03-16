import React from 'react'
import prisma from '@/lib/db/prisma';
import { Button } from '@/components/ui/button';

async function page() {
    const chapters= await prisma.chapter.findMany();
    const chapter = chapters[0];
  return (
    <div>
        {chapters.map((chapters)=>{
                return(
                    <div>
                        <div>
                            <video src=""></video>
                            <h1>{chapter.title}</h1>
                            </div>
                            <div>
                                <h2>Take quiz to test your knowledge!</h2>
                                <Button>Take Quiz</Button>
                            </div>
                    </div>
         )
        })}
    </div>
  )
}

export default page