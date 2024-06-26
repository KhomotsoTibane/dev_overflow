import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { getQuestionByTagId } from "@/lib/actions/tag.actions";
import { URLProps } from "@/types";
import React from "react";
import Pagination from "@/components/shared/Pagination";

const Page = async ({ params, searchParams }: URLProps) => {
  const result = await getQuestionByTagId({
    tagId: params.id,
    page: searchParams.page ? +searchParams.page : 1,
    searchQuery: searchParams.q,
  });

  console.log("result", result)
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">{result.tagTitle}</h1>
      <div className="mt-11 w-full">
        <LocalSearch
          route={`/tags/${params.id}`}
          iconSrc="/assets/icons/search.svg"
          placeholder="Search Tag Questions"
          otherClasses="flex-1"
          iconPosition="left"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question: any) => {
            console.log("question", question)
            return (
              <QuestionCard
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                upvotes={question.upvotes}
                author={question.author}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            );
          })
        ) : (
          <NoResult
            title="No Tag questions to show"
            description=""
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </>
  );
};

export default Page;
