import { Blender, Coffee, Microwave, Monitor, Shirt, Tv, type LucideIcon } from "lucide-react";

export type Product = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type AdditionalProduct = {
  name: string;
  warrantyOnly?: boolean;
};

export const products: Product[] = [
  {
    icon: Tv,
    title: "Televisores",
    description:
      "Smart TVs, displays LED, OLED e monitores com falhas de imagem, placa lógica ou alimentação.",
  },
  {
    icon: Coffee,
    title: "Cafeteiras",
    description:
      "Máquinas automáticas e manuais, descalcificação, bombas de pressão e sistemas eletrônicos.",
  },
  {
    icon: Blender,
    title: "Liquidificadores",
    description:
      "Substituição de motores, acoplamentos, placas de velocidade e reparo mecânico de precisão.",
  },
  {
    icon: Microwave,
    title: "Micro-ondas",
    description:
      "Reparo de magnetrons, placas membrana, trafos de alta potência e travas de segurança.",
  },
  {
    icon: Monitor,
    title: "Monitores",
    description:
      "Painéis para computadores, monitores gamers, fontes integradas e placas de interface de vídeo.",
  },
  {
    icon: Shirt,
    title: "Ferro a Vapor",
    description:
      "Reparo de resistências, termostatos, sistema de vapor e cabos de alimentação.",
  },
];

export const additionalProducts: AdditionalProduct[] = [
  { name: "Ferro Comum" },
  { name: "Climatizador"},
  { name: "Ventilador" },
  { name: "Barbeador",  warrantyOnly: true },
  { name: "Caixa de Som", warrantyOnly: true},
];
