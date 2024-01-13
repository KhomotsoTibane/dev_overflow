import LocalSearch from "@/components/shared/search/LocalSearch";
import { getAllTags } from "@/lib/actions/tag.actions";
import React from "react";
// import { Button } from "@/components/ui/button";
import Filter from "@/components/shared/filter/Filter";
import { UserFilters } from "@/constants/filters";
import TagCard from "@/components/cards/TagCard";
import NoResult from "@/components/shared/NoResult";

const Page = async () => {
  const result = await getAllTags({});
  console.log("all tags", result);
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Tags</h1>

      <div className="mt-11 flex justify-between gap-4 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/community"
          iconPosition="left"
          iconSrc="/assets/icons/search.svg"
          placeholder="Search tags"
          otherClasses="flex-1"
        />

        <Filter
          filter={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses=""
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length > 0 ? (
          result.tags.map((tag: any) => {
            return (
              <div key={tag.name}>
                <TagCard key={tag._id} tag={tag} />
              </div>
            );
          })
        ) : (
          <NoResult
            title="No tags found"
            description="No tags were found"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </section>
    </>
  );
};

export default Page;
