import type { Brand } from "@/data/brands";

type BrandCardProps = {
  brand: Brand;
};

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="group flex flex-col items-center justify-center rounded-xl border border-border bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-[#faf4fd] hover:shadow-md">
      <span className="font-heading text-2xl font-bold tracking-tight text-primary transition-colors group-hover:text-[#38005b]">
        {brand.name}
      </span>
      <span className="mt-1 text-[11px] text-muted-foreground group-hover:text-[#603083]">
        Assistência Técnica
      </span>
    </div>
  );
}
