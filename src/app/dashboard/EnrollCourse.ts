"use server"
import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";



export async function EnrollinCourse(id:string){
  
    const session = await getServerSession(authOptions)
    session?.user.id
    if(!session){
        redirect("/api/auth/signin?callbackUrl=/dashboard")
    }
    // await prisma.user.course
    if (!session || !session.user?.email) {
        return 
      }

      const isEnrolled = await prisma.course.findFirst({
        where: { AND: [{ id: id }, { users: { some: { email: session.user.email } }}] },
      });
  
      if (isEnrolled) {
        redirect("/enrolled-course")
      }



    await prisma.user.update({
        where: { id: session?.user.id },
        data: {
          Course: { connect: { id: id } }, // Connect the user to the course
        },
      });
      console.log("enrolled ")
    

}


    // const session = await getSession({ req });
  
   
  
    // Extract user email and course ID from request body
  
   
   