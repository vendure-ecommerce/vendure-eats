import { RestaurantListFragment } from '@/app/(restaurant)/graphql/find-all-restaurants';
import { Button } from '@/components/ui/button';
import { ResultOf } from 'gql.tada';
import Link from 'next/link';
import { FaRegStar, FaStar } from 'react-icons/fa6';

interface RestaurantCardProps {
  restaurant: ResultOf<typeof RestaurantListFragment>;
}

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i}>
          {i < rating ? (
            <FaStar className="text-yellow-500"></FaStar>
          ) : (
            <FaRegStar className="text-yellow-200"></FaRegStar>
          )}
        </div>
      ))}
    </div>
  );
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="hover:border-picton-blue-400 flex items-stretch justify-start gap-10 overflow-hidden rounded border border-gray-200 bg-white transition-all">
      <div className="bg-picton-blue-300 h-40 w-40 shrink-0">Image</div>
      <div className="flex grow flex-col justify-between py-4 pr-4">
        <div className="space-y-0.5">
          <span className="text-lg font-bold">{restaurant.name}</span>
          {restaurant.customFields?.address && (
            <p className="text-sm text-gray-500">{restaurant.customFields.address}</p>
          )}
          <Rating rating={3}></Rating>
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
