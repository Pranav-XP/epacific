import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { VideoPlayer } from "./_components/video-player";
import CourseEnrollButton from "./_components/course-enroll-button";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";
import { FileIcon } from "lucide-react";

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }

  const {
    chapter,
    course,
    muxData,
    attachments,
    nextChapter,
    purchase,
    userProgress,
  } = await getChapter({
    userId,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if (!chapter || !course) {
    return redirect("/");
  }

  const isLocked = !chapter.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress?.isCompleted;
  return (
    <div>
      {userProgress?.isCompleted && (
        <Banner variant="success" label="You have completed this chapter." />
      )}
      {isLocked && (
        <Banner
          variant="warning"
          label="Please purchase this course to unlock chapter."
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            chapterId={params.chapterId}
            title={chapter.title}
            courseId={params.courseId}
            nextChapterId={nextChapter?.id}
            playbackId={muxData?.playbackId as string}
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between p-4">
            <h2 className="px-4 text-2xl font-semibold mb-2">
              {chapter.title}
            </h2>
            {purchase ? (
              <div>ProgressButton</div>
            ) : (
              <CourseEnrollButton
                courseId={params.courseId}
                price={course.price as number}
              />
            )}
          </div>
          <Separator />
          <div>
            <Preview value={chapter.description!} />
          </div>
          {!!attachments.length && (
            <>
              <Separator />
              <div className="p-4">
                {attachments.map((attachement) => (
                  <a
                    className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                    href=""
                    key={attachement.id}
                    target="_blank"
                  >
                    <FileIcon />
                    <p className="line-clamp-1">{attachement.name}</p>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
