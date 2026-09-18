import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { additionalProducts } from "@/data/products";

export function AdditionalDevices() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-10 flex flex-col items-center">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#603083] transition-colors hover:text-primary"
      >
        Verifique outros aparelhos que também trabalhamos
        <ChevronDown
          className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
          {additionalProducts.map((product) => (
            <span
              key={product.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-1.5 text-xs shadow-xs"
            >
              <span className="font-medium text-primary">{product.name}</span>
              {product.warrantyOnly && (
                <span className="text-muted-foreground">
                  · somente em garantia
                </span>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
