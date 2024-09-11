import { getRestaurantById, RestaurantDetailFragment } from '@/app/(restaurant)/graphql/find-by-id';
import { ProductList } from '@/components/restaurants/ProductList';
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

  // Products
  // 1. Resolve channel of seller
  // 2. Get token of channel
  // 3. query products with token of channel

  return (
    <div className="container my-10">
      <h1 className="text-6xl font-bold text-black">{restaurant.name}</h1>
      <ProductList channelToken={channelToken}></ProductList>
    </div>
  );
}
