import { LayoutGrid } from "lucide-react";
import { products } from "@/data/products";
import { AdditionalDevices } from "./AdditionalDevices";
import { ProductCard } from "./ProductCard";

export function ProductsSection() {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <LayoutGrid className="size-6 text-primary" />
        <h3 className="font-heading text-xl font-semibold text-primary">
          Principais Aparelhos Atendidos
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>

      <AdditionalDevices />
    </div>
  );
}
