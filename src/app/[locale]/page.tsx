import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Commodities from '@/components/sections/Commodities';
import Legacy from '@/components/sections/Legacy';
import Contact from '@/components/sections/Contact';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  // Enforce Next.js 15+ promise awaiting for params in server components
  await params;
  
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <Commodities />
      <Legacy />
      <Contact />
    </main>
  );
}
