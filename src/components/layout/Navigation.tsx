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
  if (variant === "mobile") {
    return (
      <nav className={className}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onNavigate}
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
          className="relative text-sm font-semibold text-primary transition-colors after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:text-[#4f087c] hover:after:w-full"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
