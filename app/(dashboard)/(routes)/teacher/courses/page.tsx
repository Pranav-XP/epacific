import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <>
      <div className="p-6">
        <Link href="/teacher/create">
          <Button className="bg-sky-600 hover:bg-sky-500">New Course</Button>
        </Link>
      </div>
    </>
  );
};

export default CoursesPage;
