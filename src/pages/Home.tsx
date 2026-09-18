import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { BrandsSection } from "@/components/brands/BrandsSection";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandsSection />
      </main>
    </>
  );
}
