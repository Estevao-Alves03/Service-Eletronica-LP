import {
  ArrowRight,
  CheckCircle2,
  Clock,
  HelpCircle,
  Microscope,
  Receipt,
  ThumbsUp,
  type LucideIcon,
} from "lucide-react";
import { ClipboardList } from "lucide-react";

type Step = {
  number: string;
  icon: LucideIcon;
  badge?: string;
  title: string;
  description: string;
  footerLabel: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Recebimento & O.S.",
    description:
      "Entrega do equipamento na loja física com abertura imediata da Ordem de Serviço digital e checklist inicial do estado do aparelho.",
    footerLabel: "Entrada & Triagem",
  },
  {
    number: "02",
    icon: Microscope,
    badge: "3 a 5 dias úteis",
    title: "Diagnóstico Técnico",
    description:
      "Perícia em bancada laboratorial com taxa de avaliação inicial para identificação exata dos componentes danificados.",
    footerLabel: "Perícia Laboratorial",
  },
  {
    number: "03",
    icon: Receipt,
    title: "Orçamento Claro",
    description:
      "Envio do laudo descritivo com discriminação transparente das peças necessárias e dos custos de mão de obra técnica.",
    footerLabel: "Sem Custos Ocultos",
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "Sua Aprovação",
    description:
      "O reparo só é executado após sua validação formal. Total controle e autonomia do cliente sobre qualquer custo.",
    footerLabel: "Validação Prévia",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Conserto & Entrega",
    description:
      "Substituição com peças de procedência, testes de bancada e aviso instantâneo para retirada ou despacho com garantia técnica.",
    footerLabel: "Equipamento Pronto",
  },
];

export function OutOfWarrantyService() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-8 flex flex-col gap-4 border-[#f0e6f7] md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2.5">
            <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-primary">
              Etapas do Reparo
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Fluxo claro e acompanhado
            </span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-primary">
            Jornada de Conserto Fora da Garantia
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-xl border border-border/80 bg-[#faf6fd] px-4 py-2 text-sm font-medium text-primary">
          <Clock className="size-4.5" />
          <span>
            Prazo médio de diagnóstico: <strong>3 a 5 dias úteis</strong>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-[#faf6fd] p-5 transition-all hover:border-primary hover:shadow-md"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-xs transition-transform group-hover:scale-105">
                  {step.number}
                </span>
                <step.icon className="size-6 text-[#603083]" />
              </div>
              <div className="mb-1.5 h-6">
                {step.badge && (
                  <span className="inline-block rounded-md border border-border bg-secondary px-2 py-0.5 text-[11px] font-semibold text-primary">
                    {step.badge}
                  </span>
                )}
              </div>
              <h4 className="mb-2 font-semibold text-primary">{step.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
            <div className="mt-4 border-t border-border/60 pt-3 text-xs font-semibold text-[#603083]">
              {step.footerLabel}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-[#fbf8fe] p-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
            <HelpCircle className="size-6" />
          </span>
          <div>
            <p className="text-sm font-semibold text-primary">
              Dúvidas sobre a taxa de avaliação ou condições de pagamento?
            </p>
            <p className="text-xs text-muted-foreground">
              Nossos especialistas orientam sobre modelos e estimativas prévias.
            </p>
          </div>
        </div>
        <a
          href="#atendimento"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#4f087c]"
        >
          Tirar Dúvida no WhatsApp
          <ArrowRight className="size-4.5" />
        </a>
      </div>
    </div>
  );
}
