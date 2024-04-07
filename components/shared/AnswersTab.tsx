import { getUserAnswerStats } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import AnswerCard from "../cards/AnswerCard";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const AnswersTab = async ({ searchParams, userId, clerkId }: Props) => {
  const result = await getUserAnswerStats({ userId, page: 1 });
  return (
    <>
      {result.answers.map((answer) => {
        return (
          <AnswerCard
            key={answer._id}
            _id={answer._id}
            clerkId={clerkId}
            question={answer.question}
            upvotes={answer.upvotes.length}
            author={answer.author}
            createdAt={answer.createdAt}
          />
        );
      })}
    </>
  );
};

export default AnswersTab;
