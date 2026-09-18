# Service Eletrônica — Regras do Projeto

## 1. Objetivo

Este projeto é o site institucional da **Service Eletrônica**, uma assistência técnica autorizada.

O objetivo principal é transmitir:

* confiança;
* profissionalismo;
* clareza;
* facilidade para solicitar atendimento.

Nesta fase, o projeto é **exclusivamente frontend**.

Não existe:

* backend;
* banco de dados;
* autenticação;
* painel administrativo;
* API própria.

Solicitações de atendimento serão encaminhadas pelo WhatsApp.

---

## 2. Stack

Utilizar exclusivamente, salvo necessidade justificada:

* React
* TypeScript
* Vite
* Tailwind CSS v4
* Shadcn/Base UI
* Lucide React
* Geist

Gerenciamento de pacotes:

* pnpm

Não adicionar bibliotecas sem necessidade.

Antes de instalar uma nova dependência, avaliar se a funcionalidade pode ser resolvida com as ferramentas já existentes.

---

## 3. Design e Stitch

O **Google Stitch é a referência visual do projeto**.

Antes de implementar ou alterar uma parte visual significativa:

1. consultar o projeto correspondente no Stitch através do MCP, quando disponível;
2. analisar o design existente;
3. comparar com o código atual;
4. identificar quais componentes precisam ser criados ou alterados;
5. apresentar um plano antes da implementação.

Não inventar elementos visuais que não estejam definidos no design ou solicitados explicitamente.

O código deve reproduzir o design do Stitch de forma fiel, respeitando:

* espaçamento;
* tipografia;
* cores;
* hierarquia visual;
* bordas;
* sombras;
* tamanhos;
* responsividade;
* estados dos componentes.

---

## 4. Regra principal de implementação

**Não implementar imediatamente quando receber uma solicitação complexa.**

Primeiro:

1. entender o pedido;
2. analisar o código existente;
3. verificar o impacto da alteração;
4. consultar o Stitch quando a alteração envolver design;
5. explicar brevemente o que será feito;
6. somente então implementar.

Para alterações simples e claramente definidas, pode implementar diretamente.

---

## 5. Arquitetura

Manter a arquitetura simples, legível e sustentável.

Estrutura principal:

```text
src/
├── components/
│   ├── layout/
│   ├── home/
│   ├── brands/
│   ├── service/
│   ├── contact/
│   └── ui/
│
├── pages/
├── lib/
├── data/
├── App.tsx
├── main.tsx
└── index.css
```

### `components/layout`

Componentes relacionados à estrutura global:

* Header
* Footer
* Navigation

### `components/home`

Componentes relacionados à apresentação institucional:

* Hero
* About
* Location

### `components/brands`

Componentes relacionados às marcas e produtos atendidos:

* BrandsSection
* BrandCard
* ProductsSection
* ProductCard

### `components/service`

Componentes relacionados ao funcionamento do atendimento:

* HowItWorks
* WarrantyService
* OutOfWarrantyService

### `components/contact`

Componentes relacionados ao contato e solicitação de atendimento:

* ServiceForm
* ContactCTA
* WhatsAppButton

### `components/ui`

Componentes gerados pelo Shadcn/Base UI.

Não colocar lógica específica da Service Eletrônica nesses componentes.

### `pages`

Composição das páginas.

Atualmente:

```text
pages/
└── Home.tsx
```

O site é uma página institucional com navegação por seções. Não adicionar React Router sem necessidade.

### `data`

Dados estáticos do projeto:

* marcas;
* produtos;
* outras informações que precisem ser centralizadas.

Evitar espalhar listas e dados estáticos diretamente pelos componentes.

### `lib`

Funções utilitárias e código compartilhado.

Não criar abstrações sem necessidade real.

---

## 6. Responsabilidade dos componentes

Cada componente deve possuir uma responsabilidade clara.

Evitar componentes gigantes.

Evitar também fragmentar excessivamente a interface.

Não criar um componente apenas para encapsular poucas linhas sem benefício real.

Exemplo:

```text
ServiceForm
```

é responsável pela interface e comportamento do formulário.

Já:

```text
WhatsAppButton
```

é responsável pelo botão e pela ação de abrir o WhatsApp.

Não misturar responsabilidades sem necessidade.

---

## 7. Navegação

O site possui navegação entre seções da página.

As principais áreas são:

1. Sobre
2. Marcas e Produtos
3. Como Funciona
4. Solicitar Atendimento

A navegação deve utilizar âncoras/scroll quando isso corresponder ao design.

Não criar páginas separadas para cada seção sem necessidade.

---

## 8. Formulário de atendimento

O formulário é somente frontend nesta fase.

Informações previstas:

* nome;
* telefone/WhatsApp;
* CPF;
* aparelho;
* marca;
* modelo;
* defeito/problema;
* situação da garantia.

Ao enviar:

1. validar os campos necessários;
2. montar uma mensagem organizada;
3. abrir o WhatsApp com a mensagem preenchida.

Não salvar os dados em banco.

Não criar backend.

---

## 9. Links externos

Quando necessário:

* WhatsApp → abrir WhatsApp;
* localização → abrir Google Maps.

URLs, telefone, endereço e outras informações da empresa devem ficar centralizados quando isso evitar repetição.

Não inventar informações da empresa.

Se uma informação não estiver definida, perguntar antes de implementá-la.

---

## 10. Imagens e arquivos públicos

Imagens públicas devem ficar em:

```text
public/
├── images/
│   ├── brands/
│   └── products/
└── logo/
```

Não colocar imagens do site dentro de `src/assets` sem uma razão específica.

Arquivos de exemplo do Vite podem ser removidos quando não forem mais utilizados.

---

## 11. Estilização

Utilizar Tailwind CSS.

Priorizar:

* classes utilitárias;
* componentes reutilizáveis;
* variáveis de tema;
* tokens definidos pelo Design System.

Evitar CSS separado sem necessidade.

Não criar arquivos de configuração antigos do Tailwind apenas por seguir tutoriais de versões anteriores.

O projeto utiliza **Tailwind CSS v4**.

---

## 12. Shadcn/Base UI

Quando existir um componente adequado no Shadcn/Base UI, considerar sua utilização.

Os componentes gerados ficam em:

```text
src/components/ui/
```

Não alterar componentes do Shadcn desnecessariamente.

Quando uma necessidade específica da interface exigir customização, avaliar primeiro se ela pode ser feita através das propriedades e classes existentes.

---

## 13. Ícones

Utilizar **Lucide React** para ícones.

Não adicionar outra biblioteca de ícones.

Evitar substituir ícones por caracteres ou emojis quando existir um ícone adequado.

---

## 14. Responsividade

O site deve funcionar corretamente em:

* desktop;
* tablet;
* mobile.

Não criar uma versão completamente diferente para cada dispositivo.

Utilizar o sistema responsivo do Tailwind.

Toda implementação visual relevante deve ser verificada em diferentes larguras.

---

## 15. Código

Priorizar:

* legibilidade;
* simplicidade;
* manutenção;
* tipagem correta;
* componentes pequenos;
* nomes claros.

Evitar:

* abstrações prematuras;
* hooks desnecessários;
* estados globais sem necessidade;
* bibliotecas adicionais sem justificativa;
* duplicação de código;
* lógica complexa para problemas simples.

Não usar `any` sem justificativa.

---

## 16. Alterações

Antes de modificar arquivos existentes:

* verificar o conteúdo atual;
* entender dependências;
* preservar funcionalidades existentes;
* alterar somente o necessário.

Não reescrever arquivos inteiros quando uma alteração localizada for suficiente.

Não remover funcionalidades existentes sem autorização.

---

## 17. Testes

Após alterações relevantes:

1. executar o TypeScript:

```bash
pnpm exec tsc -b
```

2. executar o build quando necessário:

```bash
pnpm build
```

3. executar o projeto localmente:

```bash
pnpm dev
```

Verificar visualmente as alterações no navegador.

Erros devem ser investigados na causa, não apenas contornados.

---

## 18. Como explicar alterações

Ao implementar uma alteração relevante, explicar de forma curta:

### O que foi feito

Resumo da alteração.

### Onde

Arquivos/componentes modificados.

### Por quê

Motivo da decisão.

### Impacto

O que mudou no comportamento ou arquitetura.

### Como testar

Passos para validar.

Não fornecer explicações longas quando uma explicação curta for suficiente.

---

## 19. Regras contra invenção

Não inventar:

* informações da empresa;
* endereço;
* telefone;
* preços;
* prazos;
* políticas;
* marcas atendidas;
* funcionalidades;
* regras de negócio.

Quando uma informação necessária não estiver disponível, perguntar.

Não transformar uma suposição em requisito.

---

## 20. Regra de evolução

Este projeto será desenvolvido de forma incremental.

Não tentar construir o projeto inteiro de uma vez.

Fluxo preferencial:

```text
Analisar
   ↓
Planejar
   ↓
Implementar pequena parte
   ↓
Testar
   ↓
Validar visualmente
   ↓
Ajustar
   ↓
Próxima parte
```

A prioridade é manter o projeto funcionando durante todo o desenvolvimento.

---

## 21. Estado atual

O projeto está em fase inicial.

A estrutura base já foi criada.

Ainda não iniciar uma implementação completa do site sem antes:

1. consultar o design disponível no Stitch;
2. entender o Design System;
3. comparar o design com a estrutura atual;
4. propor o plano de implementação.

Quando o usuário solicitar uma implementação, trabalhar incrementalmente e manter a arquitetura definida neste documento.
