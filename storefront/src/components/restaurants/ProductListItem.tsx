import {
  ProductFragment,
  VariantFragment,
} from '@/app/(restaurant)/graphql/products-of-restaurant';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatePresence, motion } from 'framer-motion';
import { ResultOf, readFragment } from 'gql.tada';
import { useMemo, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

interface ProductListItemAddToCartProps {
  variant: ResultOf<typeof VariantFragment>;
}

export function ProductListItemAddToCart({ variant }: ProductListItemAddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const price = useMemo(() => {
    return (variant.priceWithTax / 100).toFixed(2);
  }, [variant]);
  const [focus, setFocus] = useState(false);

  return (
    <div
      className="flex items-center gap-4"
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <div>{price}€</div>
      <AnimatePresence>
        <motion.div
          className="overflow-hidden"
          animate={{
            opacity: focus ? 1 : 0,
            width: focus ? 'auto' : 0,
          }}
        >
          <div className="flex items-center gap-1">
            <Button size="icon-xs" variant="default" onClick={() => setQuantity(quantity - 1)}>
              <FaMinus></FaMinus>
            </Button>
            <Input
              className="h-8 w-10 border-0 bg-white p-1 text-center"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            ></Input>
            <Button size="icon-xs" variant="default" onClick={() => setQuantity(quantity + 1)}>
              <FaPlus></FaPlus>
            </Button>
            <Button size="xs" className="bg-picton-blue-400 text-white">
              Add
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface ProductListItemProps {
  product: ResultOf<typeof ProductFragment>;
}

export function ProductListItem({ product }: ProductListItemProps) {
  return (
    <div className="space-y-1 p-4">
      <span className="font-heading text-2xl font-bold">{product.name}</span>
      <ul className="flex flex-col gap-y-0.5">
        {product.variants.map((variant) => {
          const data = readFragment(VariantFragment, variant);
          return (
            <li key={data.id} className="flex grow items-center justify-start gap-4">
              <span>{data.name}</span>
              <span className="grow overflow-hidden border border-dashed border-gray-200"></span>
              <ProductListItemAddToCart variant={data}></ProductListItemAddToCart>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
