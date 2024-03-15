import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add course ",
};

async function addProduct(formdata: FormData) {
  "use server";

  const session = await getServerSession(authOptions)
  if(!session){
    redirect("/api/auth/signin?callbackUrl=/add-courses")
  }

  const title = formdata.get("title")?.toString();
  const description = formdata.get("description")?.toString();
  

  if (!title || !description ) {
    throw Error("Missing required Fields");
  }

  await prisma.course.create({
    data: { title, description  },
  });

  redirect("/");
}

export default async function AddProductPage() {

    const session = await getServerSession(authOptions)
    
    if(!session){
      redirect("/api/auth/signin?callbackUrl=/add-courses")
    }
  
    return (
      <div>
        <h1 className="mb-3 text-2xl font-bold ">Add Courses</h1>
        <form action={addProduct}>
          <input
            className="input input-bordered mb-3  max-w-xs "
            required
            name="title"
            placeholder="Title"
            type="text"
          />
  
          <textarea
            name="description"
            placeholder="description"
            className="textarea textarea-bordered mb-3 w-full"
            required
            id=""
          />

          <FormSubmitButton className=" btn-block" type="submit">
            Add Product
          </FormSubmitButton>
        </form>
      </div>
    );
  }