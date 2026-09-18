import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ChevronDown,
  Info,
  Lock,
  MessageCircle,
  MonitorSmartphone,
  Send,
  User,
} from "lucide-react";
import { brands } from "@/data/brands";
import { company } from "@/data/company";

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length > 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }
  if (digits.length > 2) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  return digits;
}

function maskCpf(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length > 9) {
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
  }
  if (digits.length > 6) {
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  }
  if (digits.length > 3) {
    return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  }
  return digits;
}

function buildWhatsAppUrl(message: string) {
  const digits = company.contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/55${digits}?text=${encodeURIComponent(message)}`;
}

const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-slate-400 hover:bg-slate-50 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10";

export function ServiceForm() {
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = String(data.get("clientName") ?? "").trim();
    const warranty = String(data.get("deviceWarranty") ?? "");
    const deviceType = String(data.get("deviceType") ?? "").trim();
    const brand = String(data.get("deviceBrand") ?? "");
    const model = String(data.get("deviceModel") ?? "").trim();
    const defect = String(data.get("deviceDefect") ?? "").trim();

    let message = `*SOLICITAÇÃO DE ATENDIMENTO - ${company.name.toUpperCase()}*\n\n`;
    message += `*CLIENTE:* ${name}\n`;
    message += `*CONTATO:* ${phone}\n`;
    if (cpf) message += `*CPF:* ${cpf}\n`;
    message += `-------------------------\n`;
    message += `*EQUIPAMENTO:* ${deviceType}\n`;
    message += `*MARCA:* ${brand}\n`;
    if (model) message += `*MODELO:* ${model}\n`;
    message += `*GARANTIA:* ${warranty}\n`;
    message += `*DEFEITO / SINTOMA:* ${defect}\n\n`;
    message += "Gostaria de obter orientações para levar o aparelho ou prosseguir com a avaliação.";

    window.open(buildWhatsAppUrl(message), "_blank");
  }

  return (
    <section
      id="atendimento"
      className="relative flex min-h-[calc(100svh-var(--header-height))] flex-col bg-gradient-to-b from-[#faf6fd]/50 via-white to-[#faf6fd]/30 py-[clamp(1rem,4svh,2.5rem)] [justify-content:safe_center]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-100/35 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 md:px-8">
        <div className="mx-auto mb-[clamp(0.75rem,3svh,2.5rem)] max-w-2xl text-center">
          <div className="mb-[clamp(0.5rem,1.5svh,1rem)] inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold text-primary shadow-xs">
            <Send className="size-4" />
            Triagem Prévia Online
          </div>
          <h2 className="font-heading mb-[clamp(0.375rem,1svh,0.75rem)] text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Solicitar Atendimento
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Preencha os dados abaixo para adiantar o seu chamado. Nosso
            sistema organizará o atendimento e direcionará a mensagem pronta
            para o WhatsApp oficial da nossa equipe técnica.
          </p>
        </div>

        <div className="rounded-3xl border border-primary/10 bg-white/90 p-[clamp(0.75rem,3svh,2.5rem)] shadow-xl shadow-purple-950/[0.04] backdrop-blur-md">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-[clamp(1rem,3svh,3rem)] lg:grid-cols-2">
              {/* Dados do Cliente */}
              <div className="flex flex-col justify-between gap-[clamp(0.5rem,2svh,1.5rem)]">
                <div>
                  <div className="mb-[clamp(0.25rem,1svh,1.5rem)] flex items-center gap-3 border-b border-purple-100/80 pb-[clamp(0.25rem,0.75svh,1rem)]">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-secondary text-primary">
                      <User className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary">
                        Dados do Cliente
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Para identificação e retorno da O.S.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-[clamp(0.5rem,1.75svh,1.25rem)]">
                    <div>
                      <label
                        htmlFor="clientName"
                        className="mb-1 block text-sm font-medium text-primary"
                      >
                        Nome Completo <span className="font-bold">*</span>
                      </label>
                      <input
                        id="clientName"
                        name="clientName"
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo Silva"
                        className={inputClassName}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="clientPhone"
                        className="mb-1 block text-sm font-medium text-primary"
                      >
                        Telefone / WhatsApp <span className="font-bold">*</span>
                      </label>
                      <input
                        id="clientPhone"
                        name="clientPhone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(event) => setPhone(maskPhone(event.target.value))}
                        placeholder="(11) 98765-4321"
                        className={inputClassName}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="clientCpf"
                        className="mb-1 block text-sm font-medium text-primary"
                      >
                        CPF{" "}
                        <span className="text-xs font-normal text-slate-400">
                          (Opcional para Nota Fiscal)
                        </span>
                      </label>
                      <input
                        id="clientCpf"
                        name="clientCpf"
                        type="text"
                        value={cpf}
                        onChange={(event) => setCpf(maskCpf(event.target.value))}
                        placeholder="000.000.000-00"
                        className={inputClassName}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="deviceWarranty"
                        className="mb-1 block text-sm font-medium text-primary"
                      >
                        Situação da Garantia <span className="font-bold">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="deviceWarranty"
                          name="deviceWarranty"
                          required
                          defaultValue=""
                          className={`${inputClassName} appearance-none pr-10`}
                        >
                          <option value="" disabled>
                            Selecione a situação
                          </option>
                          <option value="Dentro da garantia">
                            Dentro da garantia (Com Nota Fiscal)
                          </option>
                          <option value="Fora da garantia">Fora da garantia</option>
                          <option value="Não sei informar">Não sei informar</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute inset-y-0 right-3.5 my-auto size-5 text-slate-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-[clamp(0.375rem,1svh,0.75rem)] text-xs text-slate-500">
                  <Lock className="size-4 text-[#79499c]" />
                  Seus dados são protegidos e usados unicamente para o
                  atendimento.
                </div>
              </div>

              {/* Informações do Aparelho */}
              <div className="flex flex-col justify-between gap-[clamp(0.5rem,2svh,1.5rem)]">
                <div>
                  <div className="mb-[clamp(0.25rem,1svh,1.5rem)] flex items-center gap-3 border-b border-purple-100/80 pb-[clamp(0.25rem,0.75svh,1rem)]">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-secondary text-primary">
                      <MonitorSmartphone className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary">
                        Informações do Aparelho
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Detalhes do dispositivo para pré-avaliação
                      </p>
                    </div>
                  </div>

                  <div className="space-y-[clamp(0.5rem,1.75svh,1.25rem)]">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="deviceType"
                          className="mb-1 block text-sm font-medium text-primary"
                        >
                          Tipo de Aparelho <span className="font-bold">*</span>
                        </label>
                        <input
                          id="deviceType"
                          name="deviceType"
                          type="text"
                          required
                          placeholder="Ex: Smart TV, Cafeteira"
                          className={inputClassName}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="deviceBrand"
                          className="mb-1 block text-sm font-medium text-primary"
                        >
                          Marca <span className="font-bold">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="deviceBrand"
                            name="deviceBrand"
                            required
                            defaultValue=""
                            className={`${inputClassName} appearance-none pr-10`}
                          >
                            <option value="" disabled>
                              Fabricante
                            </option>
                            {brands.map((brand) => (
                              <option key={brand.name} value={brand.name}>
                                {brand.name}
                              </option>
                            ))}
                            <option value="Outra">Outra marca</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute inset-y-0 right-3.5 my-auto size-5 text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="deviceModel"
                        className="mb-1 block text-sm font-medium text-primary"
                      >
                        Modelo / Código{" "}
                        <span className="text-xs font-normal text-slate-400">
                          (Opcional, vide etiqueta traseira)
                        </span>
                      </label>
                      <input
                        id="deviceModel"
                        name="deviceModel"
                        type="text"
                        placeholder="Ex: 50PUG7625 ou RI9133"
                        className={inputClassName}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="deviceDefect"
                        className="mb-1 block text-sm font-medium text-primary"
                      >
                        Descrição do Problema <span className="font-bold">*</span>
                      </label>
                      <textarea
                        id="deviceDefect"
                        name="deviceDefect"
                        required
                        rows={3}
                        placeholder="Descreva os sintomas da falha (ex: não liga, sem imagem, som intermitente, vazamento de água...)"
                        className={`${inputClassName} resize-none`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-[clamp(0.375rem,1svh,0.75rem)] text-xs text-slate-500">
                  <Info className="size-4 text-[#79499c]" />
                  Se puder, tenha fotos da etiqueta traseira prontas para
                  agilizar o retorno.
                </div>
              </div>
            </div>

            <div className="mt-[clamp(0.5rem,2.5svh,2rem)] flex flex-col items-center border-t border-purple-100 pt-[clamp(0.5rem,2svh,1.5rem)] text-center">
              <button
                type="submit"
                className="group inline-flex w-full min-w-[320px] items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#4f087c] hover:shadow-xl active:scale-[0.99] sm:w-auto"
              >
                <MessageCircle className="size-6 transition-transform group-hover:scale-110" />
                Enviar pelo WhatsApp
                <ArrowRight className="size-4 opacity-80 transition-transform group-hover:translate-x-0.5" />
              </button>
              <div className="mt-[clamp(0.5rem,1.5svh,0.875rem)] flex max-w-lg items-center gap-1.5 text-xs leading-normal text-slate-500">
                <Lock className="size-4 shrink-0 text-slate-400" />
                Ao clicar, uma mensagem formatada com os dados preenchidos
                será aberta no WhatsApp da Service Eletrônica para atendimento
                imediato.
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
