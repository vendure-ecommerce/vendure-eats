'use client';

import {
  findAllRestaurants,
  RestaurantListFragment,
} from '@/app/(restaurant)/graphql/find-all-restaurants';
import { RestaurantCard } from '@/components/restaurants/RestaurantCard';
import { RestaurantListToolbar } from '@/components/restaurants/RestaurantListToolbar';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useQuery } from '@tanstack/react-query';
import { readFragment } from 'gql.tada';
import { parseAsInteger, useQueryState } from 'nuqs';

const PER_PAGE = 16;

export function RestaurantList() {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

  const { data, isLoading, error } = useQuery({
    queryFn: () =>
      findAllRestaurants({
        options: {
          take: PER_PAGE,
          skip: (page - 1) * PER_PAGE,
        },
      }),
    queryKey: ['findAllRestaurants'],
  });

  return (
    <div className="space-y-2 bg-gray-50 p-6">
      <RestaurantListToolbar
        perPage={PER_PAGE}
        total={data?.findAllRestaurants.totalItems}
      ></RestaurantListToolbar>
      <div className="flex flex-col items-stretch gap-4">
        {data?.findAllRestaurants.items &&
          data.findAllRestaurants.items.map((item) => {
            const data = readFragment(RestaurantListFragment, item);

            return <RestaurantCard restaurant={data}></RestaurantCard>;
          })}
      </div>
      <Pagination>
        <PaginationContent>
          {page > 1 && (
            <PaginationItem>
              <PaginationPrevious onClick={() => setPage(page - 1)} />
            </PaginationItem>
          )}
          {(data?.findAllRestaurants.totalItems ?? 0) > PER_PAGE && (
            <PaginationItem>
              <PaginationNext onClick={() => setPage(page + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
