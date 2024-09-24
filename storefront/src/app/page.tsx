'use client';

import { RestaurantList } from '@/components/restaurants/RestaurantList';

export default function Index() {
  return (
    <div className="h-screen w-full">
      <div className="grid h-full grid-cols-[600px_1fr]">
        <RestaurantList></RestaurantList>
        <div className="bg-gray-300">map</div>
      </div>
    </div>
  );
}
