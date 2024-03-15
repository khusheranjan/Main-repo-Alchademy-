import { NextAuthOptions, Session } from "next-auth"
import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { Adapter } from "next-auth/adapters"
const prisma = new PrismaClient()
import { env } from "@/lib/env"



export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
      GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks:{
      session({session,user}){
        session.user.id = user.id
        return session
  
      }
    }
  };

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }