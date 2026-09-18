import { useState } from "react";
import { BadgeCheck, Shield, Wrench } from "lucide-react";
import { OutOfWarrantyService } from "./OutOfWarrantyService";
import { WarrantyService } from "./WarrantyService";

type FlowTab = "fora" | "garantia";

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<FlowTab>("fora");

  return (
    <section
      id="como-funciona"
      className="bg-background py-[clamp(1.5rem,5svh,3.5rem)]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-[clamp(1rem,3svh,2.5rem)] max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-primary shadow-xs">
            <BadgeCheck className="size-4" />
            Processo Transparente &amp; Sem Complicação
          </div>
          <h2 className="font-heading mb-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Como Funciona o Seu Atendimento
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Entenda passo a passo cada etapa do nosso processo para consertos
            fora de garantia ou no fluxo oficial de assistência autorizada.
          </p>

          <div className="mx-auto mt-[clamp(1rem,2.5svh,2rem)] flex w-full max-w-xl justify-center rounded-2xl border border-border bg-white p-1.5 shadow-sm sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab("fora")}
              className={`flex flex-1 items-center justify-center gap-2.5 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 sm:flex-initial ${
                activeTab === "fora"
                  ? "bg-primary text-white shadow-md"
                  : "text-primary hover:bg-secondary"
              }`}
            >
              <Wrench className="size-5" />
              Fora de Garantia (Orçamento)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("garantia")}
              className={`flex flex-1 items-center justify-center gap-2.5 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 sm:flex-initial ${
                activeTab === "garantia"
                  ? "bg-primary text-white shadow-md"
                  : "text-primary hover:bg-secondary"
              }`}
            >
              <Shield className="size-5 text-[#603083]" />
              Garantia de Fábrica (Autorizada)
            </button>
          </div>
        </div>

        {activeTab === "fora" ? <OutOfWarrantyService /> : <WarrantyService />}
      </div>
    </section>
  );
}
