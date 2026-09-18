import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <div className="group flex items-start gap-4 rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-primary hover:bg-[#faf4fd] hover:shadow-md">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="size-6" />
      </div>
      <div>
        <h4 className="font-semibold text-primary transition-colors group-hover:text-[#38005b]">
          {product.title}
        </h4>
        <p className="mt-1 text-sm text-muted-foreground">
          {product.description}
        </p>
      </div>
    </div>
  );
}
