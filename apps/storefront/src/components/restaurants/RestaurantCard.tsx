import { RestaurantListFragment } from '@/app/(restaurant)/graphql/find-all-restaurants';
import { RatingBar } from '@/components/restaurants/RatingBar';
import { Button } from '@/components/ui/button';
import { ResultOf } from 'gql.tada';
import Link from 'next/link';

interface RestaurantCardProps {
  restaurant: ResultOf<typeof RestaurantListFragment>;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="hover:border-picton-blue-400 flex items-stretch justify-start gap-10 overflow-hidden rounded border border-gray-200 bg-white transition-all">
      <div className="bg-picton-blue-300 h-40 w-40 shrink-0">Image</div>
      <div className="flex grow flex-col justify-between py-4 pr-4">
        <div className="space-y-0.5">
          <span className="font-heading text-lg font-bold">{restaurant.name}</span>
          {restaurant.customFields?.address && (
            <p className="text-sm text-gray-500">{restaurant.customFields.address}</p>
          )}
          <RatingBar rating={3}></RatingBar>
        </div>
        <div className="flex justify-end">
          <Button variant="default">
            <Link href={`/restaurant/${restaurant.id}`}>Order now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
