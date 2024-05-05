import React from "react";
import Link from "next/link";
// import { Badge } from "../ui/badge";
import RenderTag from "../shared/RenderTag";
interface Props {
  tag: {
    _id: string;
    clerkId: string;
    name: string;
    questions: [];
  };
}

const TagCard = async ({ tag }: Props) => {
  return (
    <Link href={`tags/${tag._id}`} className="shadow-light100_darknone">
      <article className=" background-light900_dark200 light-border flex w-full  flex-col rounded-2xl border px-8 py-10 sm:w-[260px]">
        <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        <div className="mt-4">
          <p className=" small-regular text-dark400_light500 mt-3.5">
            <span className="body-semibold primary-text-gradient mr-2.5">
              {tag.questions.length}+
            </span>{" "}
            Questions
          </p>
        </div>
      </article>
    </Link>
  );
};

export default TagCard;
