import LocalSearch from "@/components/shared/search/LocalSearch";
import { getAllUsers } from "@/lib/actions/user.action";
import React from "react";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import Filter from "@/components/shared/filter/Filter";
import { UserFilters } from "@/constants/filters";
import UserCard from "@/components/cards/UserCard";
import { SearchParamsProps } from "@/types";
import Pagination from "@/components/shared/Pagination";

const Page = async ({searchParams}:SearchParamsProps) => {
  const result = await getAllUsers({
    searchQuery:searchParams.q,
    filter:searchParams.filter,
    page:searchParams.page ? +searchParams.page:1
  });
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">DevFlow Users</h1>

      <div className="mt-11 flex justify-between gap-4 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/community"
          iconPosition="left"
          iconSrc="/assets/icons/search.svg"
          placeholder="Search for like minded developers"
          otherClasses="flex-1"
        />

        <Filter
          filter={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses=""
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user: any) => {
            return (
              <div key={user.name}>
                <UserCard key={user._id} user={user} />
              </div>
            );
          })
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>Here lies an opportunity</p>
            <Link href="/sign-up" className="mt-2 font-bold text-accent-blue">
              Sign up to be our first user!!
            </Link>
            </div>
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
