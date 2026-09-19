import { Clock, ExternalLink, MapPin, Navigation } from "lucide-react";
import { company } from "@/data/company";

export function Location() {
  return (
    <div className="lg:col-span-5">
      <div className="relative rounded-2xl border border-purple-300/95 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:shadow-purple-900/5">
        <div className="mb-5 flex items-center justify-between border-b border-[#f0e6f7] pb-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
              <MapPin className="size-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-primary">
                Nossa Unidade
              </h3>
              <p className="text-[11px] text-muted-foreground">
                Recepção e laboratório técnico
              </p>
            </div>
          </div>
          <span className="rounded-full border border-border/60 bg-secondary px-2.5 py-1 text-[11px] font-semibold text-primary">
            Atendimento Presencial
          </span>
        </div>

        <div className="mb-6 space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[#603083]">
                Endereço
              </span>
              <p className="font-semibold text-primary">
                {company.address.street}
              </p>
              <p className="text-sm text-muted-foreground">
                {company.address.neighborhood}, {company.address.city} -{" "}
                {company.address.state}
              </p>
              <p className="text-xs text-muted-foreground">
                CEP: {company.address.zip}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-purple-300/95 bg-[#faf6fd] p-3.5">
            <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                Horários de Funcionamento
              </span>
              <p className="mt-0.5 text-sm font-medium text-primary">
                {company.hours.weekdays}
              </p>
              <p className="text-sm font-medium text-primary">
                {company.hours.weekendsAndHolidays}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-5 overflow-hidden rounded-xl border border-purple-300/95">
          <iframe
            src={company.address.mapsEmbedUrl}
            title={`Mapa de localização — ${company.name}`}
            className="h-56 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={company.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-purple-300/95 py-3 text-sm font-semibold text-primary shadow-xs transition-all hover:bg-primary hover:text-white"
        >
          <Navigation className="size-4" />
          Como chegar / Ver rota
          <ExternalLink className="size-4" />
        </a>
      </div>
    </div>
  );
}
