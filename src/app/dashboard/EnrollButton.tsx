"use client";

import { ArrowRight } from "lucide-react";
import { EnrollinCourse } from "@/app/dashboard/EnrollCourse";
import { Course } from "@prisma/client";
import { useState, useTransition } from "react";

const EnrollButton = (course: Course) => {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);


  const id = course.id;
  return (
    <div>
      <button
        className="text-md"
        onClick={() => {
            setSuccess(false);
            startTransition(async () => {
              await EnrollinCourse(id);
              setSuccess(true);
            });
          }}
      >
        Enroll
        <div className="pl-1">
          <ArrowRight />
        </div>
      </button>
    </div>
  );
};

export default EnrollButton;
