import { getRestaurantById, RestaurantDetailFragment } from '@/app/(restaurant)/graphql/find-by-id';
import { ProductList } from '@/components/restaurants/ProductList';
import { RatingBar } from '@/components/restaurants/RatingBar';
import { readFragment } from 'gql.tada';
import { notFound } from 'next/navigation';

export default async function RestaurantDetail({ params }: { params: { id: string } }) {
  const result = await getRestaurantById({
    id: params.id,
  });

  if (!result.restaurantById) {
    return notFound();
  }

  const restaurant = readFragment(RestaurantDetailFragment, result.restaurantById.seller);
  const channelToken = result.restaurantById.channelToken;

  return (
    <div className="container my-10 space-y-6">
      <div className="space-y-1">
        <h1 className="text-6xl font-bold text-black">{restaurant.name}</h1>
        {restaurant.customFields?.address && (
          <span className="text-gray-500">{restaurant.customFields.address}</span>
        )}
        <RatingBar className="text-2xl" rating={3}></RatingBar>
      </div>
      <div className="grid grid-cols-2">
        <ProductList channelToken={channelToken}></ProductList>
      </div>
    </div>
  );
}
