// Mantido em sincronia com o "+ 0.5rem" do scroll-padding-top em index.css.
const SCROLL_GAP = 8;

/**
 * Navega até uma seção da landing page, compensando a altura real do
 * header fixo. O duplo requestAnimationFrame garante que o layout já
 * esteja assentado (ex.: menu mobile fechado) antes de medir a posição
 * de destino — sem isso, o scroll é calculado com o menu ainda aberto
 * e ultrapassa o topo da seção quando o menu fecha.
 */
export function navigateToSection(id: string, onBeforeScroll?: () => void) {
  onBeforeScroll?.();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;

      history.pushState(null, "", `#${id}`);

      const header = document.querySelector("header");
      const headerHeight = header?.getBoundingClientRect().height ?? 0;

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        SCROLL_GAP;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });
}
