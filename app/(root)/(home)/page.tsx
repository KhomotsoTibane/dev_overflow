import Filter from "@/components/shared/filter/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title: "How to use TypeScript interfaces?",
    questionToTags: [
      {
        questionId: "1",
        tagId: "101",
        tag: {
          id: "101",
          name: "TypeScript",
        },
      },
      {
        questionId: "1",
        tagId: "102",
        tag: {
          id: "102",
          name: "Interfaces",
        },
      },
    ],
    author: {
      id: "user1",
      name: "John Doe",
      avatar: "avatar1.jpg",
    },
    upvotes: 1500000,
    views: 500000,
    answers: 750,
    createdAt: new Date("2023-01-01"),
  },
  {
    _id: "2",
    title: "Working with React hooks",
    questionToTags: [
      {
        questionId: "2",
        tagId: "103",
        tag: {
          id: "103",
          name: "React",
        },
      },
      {
        questionId: "2",
        tagId: "104",
        tag: {
          id: "104",
          name: "Hooks",
        },
      },
    ],
    author: {
      id: "user2",
      name: "Jane Doe",
      avatar: "avatar2.jpg",
    },
    upvotes: 15,
    views: 150,
    answers: 5,
    createdAt: new Date("2023-02-15"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="max:sm:w-full flex justify-end">
          <Button
            className="primary-gradient min-h-[46px] px-4 py-3
         !text-light-900"
          >
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-4 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconSrc="/assets/icons/search.svg"
          placeholder="Search Questions"
          otherClasses="flex-1"
          iconPosition="left"
        />

        <Filter
          filter={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question, i) => {
            return (
              <QuestionCard
                key={i}
                _id={question._id}
                title={question.title}
                upvotes={question.upvotes}
                questionToTags={question.questionToTags}
                author={question.author}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            );
          })
        ) : (
          <NoResult
            title="There are no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query
          could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
