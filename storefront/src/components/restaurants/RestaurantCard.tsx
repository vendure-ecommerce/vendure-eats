import { RestaurantListFragment } from '@/app/(restaurant)/graphql/find-all-restaurants';
import { ResultOf } from 'gql.tada';
import Link from 'next/link';

interface RestaurantCardProps {
  restaurant: ResultOf<typeof RestaurantListFragment>;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link
      href={`/restaurant/${restaurant.id}`}
      className="rounded border border-gray-200 p-8 transition-all hover:bg-gray-50"
    >
      <span className="text-2xl text-black">{restaurant.name}</span>
      {restaurant.customFields?.address && <p className="text-gray-500">{restaurant.customFields.address}</p>}
    </Link>
  );
}
