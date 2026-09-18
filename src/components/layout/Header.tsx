import { useState } from "react";
import { Cpu, Menu, X, Zap } from "lucide-react";
import { Navigation } from "./Navigation";
import { company } from "@/data/company";
import { navigateToSection } from "@/lib/scroll";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-8">
        <a
          href="#sobre"
          onClick={(event) => {
            event.preventDefault();
            navigateToSection("sobre");
          }}
          className="group flex items-center gap-3"
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary shadow-sm transition-colors group-hover:bg-[#4f087c]">
            <Cpu className="size-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-tight text-primary">
              {company.name}
            </span>
            <span className="-mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#603083]">
              {company.tagline}
            </span>
          </div>
        </a>

        <Navigation className="hidden items-center gap-8 md:flex" />

        <div className="flex items-center gap-3">
          <a
            href="#atendimento"
            onClick={(event) => {
              event.preventDefault();
              navigateToSection("atendimento");
            }}
            className="hidden items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#4f087c] active:scale-[0.98] sm:inline-flex"
          >
            <Zap className="size-4" />
            Atendimento Rápido
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-primary transition-colors hover:bg-secondary md:hidden"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="space-y-3 border-t border-border bg-white px-6 py-4 md:hidden">
          <Navigation
            variant="mobile"
            onNavigate={() => setIsMenuOpen(false)}
          />
          <a
            href="#atendimento"
            onClick={(event) => {
              event.preventDefault();
              navigateToSection("atendimento", () => setIsMenuOpen(false));
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-md"
          >
            <Zap className="size-4" />
            Atendimento Rápido
          </a>
        </div>
      )}
    </header>
  );
}
