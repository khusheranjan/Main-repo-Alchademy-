import prisma from "@/lib/db/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
const page = async () => {
    const session = await   getServerSession(authOptions)
    const userId= session?.user.id

    // console.log(userId)
    if(!session){
        return
            
    }
    const userWithCourses = await prisma.user.findUnique({
        where:{
            id:userId,
        },include:{
            Course:true
        },
    })

    const enrolledCourses = userWithCourses?.Course
   
  return (
    <div>
      {JSON.stringify(enrolledCourses)}
    </div>
  )
}

export default page
