'use client';

import {
  findProductsOfRestaurant,
  ProductFragment,
} from '@/app/(restaurant)/graphql/products-of-restaurant';
import { ProductListItem } from '@/components/restaurants/ProductListItem';
import { useQuery } from '@tanstack/react-query';
import { readFragment } from 'gql.tada';

interface ProductListProps {
  channelToken: string;
}

export function ProductList({ channelToken }: ProductListProps) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => findProductsOfRestaurant(channelToken, {}),
    queryKey: ['findProductsOfRestaurant', channelToken],
  });

  return (
    <div className="rounded border border-gray-100 bg-white shadow-md">
      {data?.products.items.map((item) => {
        const data = readFragment(ProductFragment, item);

        return <ProductListItem product={data} key={data.id}></ProductListItem>;
      })}
    </div>
  );
}
