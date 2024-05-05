import LocalSearch from "@/components/shared/search/LocalSearch";
import { getAllTags } from "@/lib/actions/tag.actions";
import React from "react";
// import { Button } from "@/components/ui/button";
import Filter from "@/components/shared/filter/Filter";
import { TagFilters} from "@/constants/filters";
import TagCard from "@/components/cards/TagCard";
import NoResult from "@/components/shared/NoResult";
import { SearchParamsProps } from "@/types";
import Pagination from "@/components/shared/Pagination";

const Page = async ({searchParams}:SearchParamsProps) => {
  const result = await getAllTags({
    searchQuery:searchParams.q,
    filter:searchParams.filter,
    page: searchParams.page ? +searchParams.page:1
  });

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
          filter={TagFilters}
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
