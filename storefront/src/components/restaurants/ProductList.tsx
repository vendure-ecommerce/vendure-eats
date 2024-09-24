'use client';

import {
  findProductsOfRestaurant,
  ProductFragment,
} from '@/app/(restaurant)/graphql/products-of-restaurant';
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
    <div>
      {data?.products.items.map((item) => {
        const data = readFragment(ProductFragment, item);

        return (
          <div key={data.id}>
            <span className="text-2xl">{data.name}</span>
            <ul className={'text-gray-600'}>
              {data.variants.map((variant) => {
                const price = (variant.priceWithTax / 100).toFixed(2);

                return (
                  <li key={variant.id}>
                    {variant.name} ({variant.sku}): {price}€
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
