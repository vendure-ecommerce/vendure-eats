'use client'

import React from "react";
import {useQuery} from "@tanstack/react-query";
import {findAllRestaurants, RestaurantListFragment} from "@/app/(restaurant)/graphql/find-all-restaurants";
import {RestaurantCard} from "@/components/restaurants/RestaurantCard";
import {readFragment} from "gql.tada";

export default function Index() {
  const {data, isLoading, error} = useQuery({
    queryFn: () => findAllRestaurants({
      options: {
        take: 10,
        skip: 0,
      }
    }),
    queryKey: ["findAllRestaurants"],
  })

  return (
    <div className="h-screen w-full">
      <div className="grid grid-cols-[600px_1fr] h-full">
        <div className="p-10 flex flex-col items-stretch gap-10">
          {data?.findAllRestaurants.items && data.findAllRestaurants.items.map(item => {
            const data = readFragment(RestaurantListFragment, item)

            return <RestaurantCard
              restaurant={data}>
            </RestaurantCard>
          })}
        </div>
        <div className="bg-gray-300">map</div>
      </div>
    </div>
  );
}
