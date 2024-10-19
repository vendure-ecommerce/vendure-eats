import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa6';

interface RatingBarProps {
  rating: number;
}

export function RatingBar({ rating, className, ...props }: RatingBarProps & ComponentProps<'div'>) {
  return (
    <div className={cn(['flex items-center', className])} {...props}>
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
