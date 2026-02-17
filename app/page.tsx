import dynamic from "next/dynamic";
import Sidebar from "@/components/sections/Sidebar";
import Hero from "@/components/sections/Hero";

// Dynamic imports for below-the-fold sections
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <div className="min-h-[600px]" />,
});
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="min-h-[800px]" />,
});
const Stack = dynamic(() => import("@/components/sections/Stack"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Bookmarks = dynamic(() => import("@/components/sections/Bookmarks"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading: () => <div className="min-h-[300px]" />,
});
const CursorGlow = dynamic(() => import("@/components/ui/CursorGlow"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <Sidebar />
      <CursorGlow />
      <main className="lg:ml-sidebar relative z-10">
        {/* Mobile top spacing for fixed header */}
        <div className="lg:hidden h-14" />
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Bookmarks />
        <Footer />
      </main>
    </>
  );
}
