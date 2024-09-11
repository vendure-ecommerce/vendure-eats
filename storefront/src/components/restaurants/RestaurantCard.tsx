import Link from "next/link";
import {RestaurantListFragment} from "@/app/(restaurant)/graphql/find-all-restaurants";
import {ResultOf} from "gql.tada";

interface RestaurantCardProps {
  restaurant: ResultOf<typeof RestaurantListFragment>
}

export function RestaurantCard({restaurant}: RestaurantCardProps) {
  return (
    <Link href={`/restaurant/${restaurant.id}`}
          className="border border-gray-200 rounded p-8 hover:bg-gray-50 transition-all">
      <span className="text-2xl text-black">{restaurant.name}</span>
      {restaurant.customFields?.address && (
        <p className="text-gray-500">{restaurant.customFields.address}</p>
      )}
    </Link>
  )
}
