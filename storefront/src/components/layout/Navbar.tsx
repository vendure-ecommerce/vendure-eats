import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-950 px-4 py-2">
      <span>Vendure Eats</span>
      <Image
        width={300}
        height={100}
        className="h-10 w-auto"
        src="/brand-symbol.svg"
        alt="Vendure Eats"
      />
      <div className="flex items-center gap-1">
        <Button variant="link" className="text-slate-50">
          <ShoppingCart></ShoppingCart>
        </Button>
        <Button variant="link" className="text-white">
          Sign in
        </Button>
      </div>
    </nav>
  );
}
