'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useQueryState } from 'nuqs';

interface RestaurantListToolbar {
  perPage?: number;
  total?: number;
}

export function RestaurantListToolbar({ perPage = 10, total = 0 }: RestaurantListToolbar) {
  const restaurantCategories = [
    {
      key: 'indian',
      label: 'Indian',
    },
    {
      key: 'turkish',
      label: 'Turkish',
    },
    {
      key: 'austrian',
      label: 'Austrian',
    },
  ];
  const sortOptions = [
    {
      key: 'rating',
      label: 'Rating',
    },
    {
      key: 'price',
      label: 'Price',
    },
    {
      key: 'distance',
      label: 'Distance',
    },
  ];

  const [category, setCategory] = useQueryState('category');
  const [sort, setSort] = useQueryState('sort');

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Select onValueChange={setCategory} value={category ?? undefined}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {restaurantCategories.map((category) => (
              <SelectItem key={category.key} value={category.key}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSort} value={sort ?? undefined}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Showing {total < perPage ? total : perPage} of {total}
        </span>
      </div>
    </div>
  );
}
