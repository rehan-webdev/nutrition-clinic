import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function App() {
  useRevealOnScroll();

  return (
    <div className="relative min-h-svh bg-cream">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
