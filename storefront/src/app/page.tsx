'use client';

import { findAllRestaurants, RestaurantListFragment } from '@/app/(restaurant)/graphql/find-all-restaurants';
import { RestaurantCard } from '@/components/restaurants/RestaurantCard';
import { useQuery } from '@tanstack/react-query';
import { readFragment } from 'gql.tada';

export default function Index() {
  const { data, isLoading, error } = useQuery({
    queryFn: () =>
      findAllRestaurants({
        options: {
          take: 10,
          skip: 0,
        },
      }),
    queryKey: ['findAllRestaurants'],
  });

  return (
    <div className="h-screen w-full">
      <div className="grid h-full grid-cols-[600px_1fr]">
        <div className="flex flex-col items-stretch gap-10 p-10">
          {data?.findAllRestaurants.items &&
            data.findAllRestaurants.items.map((item) => {
              const data = readFragment(RestaurantListFragment, item);

              return <RestaurantCard restaurant={data}></RestaurantCard>;
            })}
        </div>
        <div className="bg-gray-300">map</div>
      </div>
    </div>
  );
}
