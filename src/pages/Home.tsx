import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { BrandsSection } from "@/components/brands/BrandsSection";
import { HowItWorks } from "@/components/service/HowItWorks";
import { ServiceForm } from "@/components/contact/ServiceForm";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandsSection />
        <HowItWorks />
        <ServiceForm />
      </main>
      <Footer />
    </>
  );
}
