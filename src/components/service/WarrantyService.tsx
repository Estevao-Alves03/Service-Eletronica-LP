import {
  BadgeCheck,
  Cable,
  CheckCircle2,
  FileText,
  Headset,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

type Pillar = {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  footerNote: string;
};

const PILLARS: Pillar[] = [
  {
    icon: FileText,
    badge: "Requisito Legal",
    title: "Nota Fiscal Obrigatória",
    description:
      "Apresentação obrigatória da nota fiscal de compra emitida em território nacional. O documento deve estar legível, sem rasuras e dentro da vigência de garantia.",
    footerNote: "Aceitamos versão impressa ou PDF",
  },
  {
    icon: Cable,
    badge: "O que Trazer",
    title: "Acessórios & Cabos",
    description:
      "O produto não necessita obrigatoriamente da caixa ou embalagem original. Nosso consultor informará previamente caso fontes de alimentação, controles ou cabos específicos sejam necessários.",
    footerNote: "Não precisa de caixa original",
  },
  {
    icon: Headset,
    badge: "Agilidade",
    title: "Triagem Rápida",
    description:
      "Antes de se deslocar até a assistência, valide seu modelo e número de série com nossa equipe pelo WhatsApp para confirmar a cobertura contratual e acelerar a entrada.",
    footerNote: "Evita viagens desnecessárias",
  },
];

export function WarrantyService() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-[#faf6fd] via-white to-[#fbf8fe] p-6 shadow-sm sm:p-10">
      <div className="mb-8 flex flex-col gap-4 border-border/70 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2.5">
            <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-primary">
              Rede Credenciada Oficial
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Atendimento conforme diretrizes da fabricante
            </span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-primary">
            Atendimento em Garantia de Fábrica
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-semibold text-primary">
          <BadgeCheck className="size-4.5" />
          Peças 100% Originais Autorizadas
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-xs transition-all hover:border-primary hover:shadow-md"
          >
            <div>
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <pillar.icon className="size-6" />
              </div>
              <div className="mb-2 inline-block rounded-md border border-border/80 bg-[#faf4fd] px-2 py-0.5 text-[11px] font-semibold text-primary">
                {pillar.badge}
              </div>
              <h4 className="mb-2 font-semibold text-primary">
                {pillar.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-[#f0e6f7] pt-3 text-xs font-medium text-[#603083]">
              <CheckCircle2 className="size-4" />
              {pillar.footerNote}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-[#fbf8fe] p-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
            <MessageCircle className="size-5" />
          </span>

          <div>
            <h4 className="text-sm font-semibold text-primary">
              Pronto para validar sua garantia?
            </h4>

            <p className="text-xs text-muted-foreground">
              Envie uma foto da sua nota fiscal e da etiqueta do aparelho para
              validarmos o credenciamento de imediato.
            </p>
          </div>
        </div>

        <a
          href="#atendimento"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#4f087c]"
        >
          Falar com Consultor de Garantia
          <MessageCircle className="size-4.5" />
        </a>
      </div>
    </div>
  );
}
