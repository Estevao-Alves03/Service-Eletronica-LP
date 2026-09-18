import type { MouseEvent } from "react";
import { navigateToSection } from "@/lib/scroll";

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#marcas-produtos", label: "Marcas e Produtos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#atendimento", label: "Solicitar Atendimento" },
] as const;

type NavigationProps = {
  variant?: "desktop" | "mobile";
  className?: string;
  onNavigate?: () => void;
};

export function Navigation({
  variant = "desktop",
  className,
  onNavigate,
}: NavigationProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    navigateToSection(href.slice(1), onNavigate);
  }

  if (variant === "mobile") {
    return (
      <nav className={className}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => handleClick(event, link.href)}
            className="block py-2 text-sm font-medium text-primary hover:text-[#4f087c]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav className={className}>
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(event) => handleClick(event, link.href)}
          className="relative text-sm font-semibold text-primary transition-colors after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:text-[#4f087c] hover:after:w-full"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
